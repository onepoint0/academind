import type { Project, SetTasksFunction } from '../lib/data';
import { MainContent } from '../ui/MainContent';
import { useState } from 'react';
// import { type SetTasksParams } from '../lib/data'

type Props = {
  project?: Project;
  // setTasks: SetTasksFunction
  setTasks: (id: number, task: string, action: 'add' | 'remove') => void;
  deleteProject: (id: number) => void;
};

export const EditProject = ({ project, setTasks, deleteProject }: Props) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  const [newTask, setNewTask] = useState('');

  const handleSetTasks = (id: number, task: string, action: 'add' | 'remove') => {
    setTasks(id, task, action);
    setNewTask('');
  };

  const handleDeleteProject = () => {
    const userConfirmed = confirm(`Are you sure you want to delete project ${project.title}?`);

    if (userConfirmed) {
      console.log('User clicked OK. Proceeding with action...');
      deleteProject(project.id);
    } else {
      console.log('User clicked Cancel. Action aborted.');
    }
  };

  const dueDate = project.dueDate ? new Date(project.dueDate).toLocaleDateString('es-AU') : 'No due date...';

  const addTaskDisabled = newTask === '';

  return (
    <MainContent>
      <div id='editContainer' className='w-4/5'>
        <div className='px-2'>
          <div id='titleBar' className='flex justify-between items-center mb-5 w-full'>
            <span className='text-5xl font-bold'>{project.title}</span>
            <button className='cursor-pointer' onClick={handleDeleteProject}>
              Delete
            </button>
          </div>
          <p className='text-2xl text-gray-400  mb-4'>DUE DATE: {dueDate}</p>
          <div className='text-2xl/tight text-gray-800 font-bold  mb-4 whitespace-pre-wrap'>{project.description}</div>
        </div>

        <hr className='text-gray-600 h-4' />

        <div className='px-2'>
          <div id='tasks'>
            <h2 className='text-2xl mb-2'>Tasks</h2>
            <div className='flex gap-3'>
              <input className='text-xl bg-gray-400 grow py-2 pl-6' type='text' value={newTask} onChange={e => setNewTask(e.target.value)} />
              <button
                className={`text-white bg-gray-800 p-3 ${!addTaskDisabled && 'cursor-pointer'}`}
                onClick={() => handleSetTasks(project.id, newTask, 'add')}
                disabled={newTask === ''}
              >
                Add Task
              </button>
            </div>

            <div className='my-4'>
              {project.tasks.map((t, idx) => (
                <div key={idx} className='flex justify-between text-2xl p-6 bg-gray-200'>
                  <span>{t}</span>{' '}
                  <span onClick={() => handleSetTasks(project.id, t, 'remove')} className='text-red-500'>
                    Clear
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
};
