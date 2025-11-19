type Props = {
  title: string
  value: string
  meta: string
  type: string
  rows?: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, field: string) => void
}

export const FormGroup = ({ title, value, meta, type, rows, handleChange }: Props) => {
  // const metaString = meta as string; // stronger typed... for later
  const metaString = meta
  return (
    <>
      <label className='mb-2 pl-2 color-black' htmlFor={metaString}>
        {title}
      </label>
      {type === 'textarea' ? (
        <textarea
          onChange={(e) => handleChange(e, meta)}
          className='bg-neutral-300 w-full p-2 mb-4 focus:border-b-4 focus:border-neutral-800 min-h-[120px]'
          id='description'
          name='description'
          value={value}
        />
      ) : (
        <input
          onChange={(e) => handleChange(e, meta)}
          className='bg-neutral-300 w-full p-2 mb-4 focus:border-b-4 focus:border-black-800'
          type={type}
          name={metaString}
          id={metaString}
          value={value}
        />
      )}
    </>
  )
}
