import { useState } from 'react'
import { type FormData, type SetTasksFunction } from './lib/data.tsx'
import { type Project } from './lib/data.tsx'
import { type ActivePage } from './lib/data.tsx'
import './App.css'
import { AddProject } from './components/AddProject.tsx'
import { EditProject } from './components/EditProject.tsx'
import SideBar from './components/SideBar.tsx'
import StartPage from './components/StartPage.tsx'

const initialProjects: Project[] = [
  {
    id: 0,
    title: 'Learn React',
    description: 'Learn react from the ground up',
    dueDate: '2025-11-20',
    tasks: [],
  },
]

function App() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [activePage, setActivePage] = useState<ActivePage>('start')
  const [currentProjectId, setCurrentProjectId] = useState<number | undefined>(undefined)

  const setMainPage = (page: ActivePage, currentProjectId?: number) => {
    setActivePage(page)
    setCurrentProjectId(currentProjectId)
  }

  const handleSetProjects = (formData: FormData, page: ActivePage) => {
    console.log('form data ', formData)
    setProjects(prev => {
      const id: number = prev.length
      return [...prev, { ...formData, id, tasks: [] }]
    })
    setActivePage(page)
  }
  // const setTasks: SetTasksFunction = (id, task, action) => {
  const setTasks = (id: number, task: string, action: 'add' | 'remove') => {
    setProjects(prev => {
      const currentProject = prev.find(p => p.id === id)

      if (!currentProject) return prev // Return original if not found

      const copy =
        action === 'add'
          ? {
              ...currentProject,
              tasks: [...currentProject.tasks, task],
            }
          : {
              ...currentProject,
              tasks: currentProject.tasks.filter(t => t !== task),
            }

      return prev.map(project => (project.id === id ? copy : project))
    })
  }

  const currentProject = projects.find(p => p.id === currentProjectId)

  return (
    <div className='flex h-screen'>
      <SideBar projects={projects} handleButtonClick={setMainPage} handleProjectClick={setMainPage} />

      {activePage === 'start' && <StartPage projects={projects} />}

      {activePage === 'addProject' && <AddProject handleCancel={setMainPage} handleSave={handleSetProjects} />}

      {activePage === 'editProject' && <EditProject project={currentProject} setTasks={setTasks} />}
    </div>
  )
}

export default App
