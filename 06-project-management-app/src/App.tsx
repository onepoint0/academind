import './App.css'
import { AddProject } from './components/AddProject.tsx';
import { EditProject } from './components/EditProject.tsx';
import SideBar from './components/SideBar.tsx'
import StartPage from './components/StartPage.tsx';
import { useState } from 'react';
import { type FormData } from './lib/data.tsx';
import { type Project } from './lib/data.tsx';
import { type ActivePage } from './lib/data.tsx';

const initialProjects: Project[] = [
  { id: 0, title: 'Learn React', description: 'Learn react from the ground up', dueDate: '' }
]

function App() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [activePage, setActivePage] = useState<ActivePage>('start');

  const setMainPage = (page: ActivePage) => {
    setActivePage(page)
  }

  const handleSetProjects = (formData: FormData, page: ActivePage) => {
    console.log('form data ', formData);
    setProjects(prev => {
      const id: number = prev.length;
      return [...prev, { ...formData, id }]
    });
    setActivePage(page);
  }

  console.log(projects);
  return (
    <div className='flex h-screen'>
      <SideBar projects={projects} handleButtonClick={setMainPage} handleProjectClick={setMainPage} />
      {activePage === 'start' && <StartPage projects={projects} />}
      {activePage === 'addProject' && <AddProject handleCancel={setMainPage} handleSave={handleSetProjects} />}
      {activePage === 'editProject' && <EditProject title={'title for now'} />}

    </div>
  )
}

export default App
