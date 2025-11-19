import type { Project } from '../lib/data'
import { Button } from '../ui/Button'
import { FaPlus } from 'react-icons/fa'
import { type ActivePage } from '../lib/data'

type Props = {
  projects: Project[]
  handleButtonClick: (page: ActivePage) => void
  handleProjectClick: (page: ActivePage, id: number) => void
}

const SideBar = ({ projects, handleButtonClick, handleProjectClick }: Props) => {
  return (
    <div className='flex flex-col py-8 px-4 items-start bg-amber-500'>
      <p className='text-4xl mb-8 text-white'>YOUR PROJECTS</p>

      <Button
        handleClick={() => handleButtonClick('addProject')}
        icon={<FaPlus className='w-4 h-4' />}
        text='Add Project'
        color='text-gray-200'
        bgColor='bg-gray-800'
      />

      {projects.map(p => (
        <h2 onClick={() => handleProjectClick('editProject', p.id)} className='mb-1 pl-4 py-1 text-2xl font-bold text-gray-800'>
          {p.title}
        </h2>
      ))}
    </div>
  )
}
export default SideBar
