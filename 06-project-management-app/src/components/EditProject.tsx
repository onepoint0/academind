import type { Project, SetTasksFunction } from '../lib/data'
import { MainContent } from '../ui/MainContent'
import { useState } from 'react'
// import { type SetTasksParams } from '../lib/data'

type Props = {
  project?: Project
  // setTasks: SetTasksFunction
  setTasks: (id: number, task: string, action: 'add' | 'remove') => void
}

export const EditProject = ({ project, setTasks }: Props) => {
  if (!project) {
    return <div>Project not found</div>
  }

  const [newTask, setNewTask] = useState('')

  const handleSetTasks = (id: number, task: string, action: 'add' | 'remove') => {
    setTasks(id, task, action)
    setNewTask('')
  }

  const dueDate = new Date(project.dueDate).toLocaleDateString('es-AU')

  return (
    <MainContent>
      <div id='editContainer' className='w-4/5'>
        <div className='px-2'>
          <div id='titleBar' className='flex justify-between items-center mb-5 w-full'>
            <span className='text-5xl font-bold'>{project.title}</span>
            <button onClick={() => console.log('delete clicked')}>Delete</button>
          </div>
          <p className='text-2xl text-gray-400  mb-4'>DUE DATE: {dueDate}</p>
          <div className='text-2xl/tight text-gray-800 font-bold  mb-4 whitespace-pre-wrap'>{project.description}</div>
        </div>

        <hr className='text-gray-600 h-4' />
        <div className='px-2'>
          <div id='tasks'>
            <h2 className='text-2xl mb-2'>Tasks</h2>
            <div className='flex gap-3'>
              <input className='text-xl bg-gray-400 grow py-2 pl-8' type='text' value={newTask} onChange={e => setNewTask(e.target.value)} />
              <button className='text-white bg-gray-800 p-3' onClick={() => handleSetTasks(project.id, newTask, 'add')}>
                Add Task
              </button>
            </div>
            {project.tasks.map(t => (
              <div className='flex justify-between text-2xl p-8 my-4 bg-gray-200'>
                <span>{t}</span>{' '}
                <span onClick={() => handleSetTasks(project.id, t, 'remove')} className='text-red-500'>
                  Clear
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainContent>
  )
}
