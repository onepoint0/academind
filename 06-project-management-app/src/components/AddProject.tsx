import { useState } from "react"
import { Button } from "../ui/Button"

const initialFormData = {
  title: 'asdf',
  description: '',
  dueDate: ''
}

export const AddProject = () => {
  const [formData, setFormData] = useState(initialFormData);
  return (
    <div className="p-4 w-full">
      <div id="buttons" className="flex flex-row justify-end gap-2">
        <Button color='color-black-500' bgColor='bg-white' text='Cancel' />
        <Button color='color-white' bgColor='bg-amber-500' text='Save' />
      </div>
      <div className="form flex flex-col items-start">
        <label className='color-black' htmlFor="title">TITLE</label>
        <input type="text" name='title' id='title' value={formData.title} />
        <label htmlFor="description">DESCRIPTION</label>
        <input type="textarea" name='description' id='description' value={formData.description} />
        <label htmlFor="dueDate">DUE DATE</label>
        <input type="text" name='dueDate' id='dueDate' value={formData.dueDate} />
      </div>

    </div>
  )
}
