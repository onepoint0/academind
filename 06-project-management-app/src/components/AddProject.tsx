import { useState } from 'react';
import { Button } from '../ui/Button';
import { FormGroup } from '../ui/FormGroup';
import { initialFormData } from '../lib/data';
import { type FormData } from '../lib/data';
import { type ActivePage } from '../lib/data.tsx';

const formFields = [
  { title: 'TITLE', meta: 'title' as const, type: 'text' },
  { title: 'DESCRIPTION', meta: 'description' as const, type: 'textarea' },
  { title: 'DUE DATE', meta: 'dueDate' as const, type: 'date' },
];

type Props = {
  handleSave: (formData: FormData, page: ActivePage) => void;
  handleCancel: (page: ActivePage) => void;
};

export const AddProject = ({ handleSave, handleCancel }: Props) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, field: string) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className='p-4 w-3/4'>
      <div id='buttons' className='flex flex-row justify-end gap-2 '>
        <Button color='color-black-500' bgColor='bg-white' text='Cancel' handleClick={() => handleCancel('start')} />
        <Button
          color='text-white'
          bgColor='bg-amber-500'
          hoverColor='hover:text-black'
          hoverBgColor='hover:bg-amber-400'
          text='Save'
          handleClick={() => handleSave(formData, 'editProject')}
        />
      </div>
      <div className='form flex flex-col items-start'>
        {formFields.map(f => (
          <FormGroup key={f.meta} title={f.title} meta={f.meta} type={f.type} value={formData[f.meta]} handleChange={handleChange} />
        ))}
      </div>
    </div>
  );
};
