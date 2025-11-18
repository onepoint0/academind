import './App.css'
import { AddProject } from './components/AddProject.tsx';
import SideBar from './components/SideBar.tsx'
import StartPage from './components/StartPage.tsx';
import { useState } from 'react';

function App() {
  const [addingProject, setAddingProject] = useState(false);

  const handleAddingProject = () => {
    setAddingProject(prev => !prev)
  }

  return (
    <div className='flex h-screen'>
      <SideBar handleClick={handleAddingProject} />
      {addingProject ? <AddProject /> : <StartPage />}
    </div>
  )
}

export default App
