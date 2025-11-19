import logo from '../assets/logo.png'
import { Button } from '../ui/Button';
import { type Project } from '../lib/data.tsx';

type Props = {
  projects: Project[]
}

const StartPage = ({ projects }: Props) => {
  console.log(projects && 'projects');
  return (
    <div className='flex flex-col grow items-center justify-center'>
      <img className="w-36 mb-8" src={logo} alt="Project Manager Logo" />
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-600">No Project Selected</h1>
      <p className='mb-8 text-center text-2xl text-gray-500'>Select a project or get started with a new one</p>
      <Button text='Create New Project' color='text-gray-200' bgColor='bg-gray-800' />
      {/* {projects.map(p => <p key={p.id}>{p.title}</p>)} */}
    </div>
  )
}

export default StartPage;