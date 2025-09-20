import { useState, createContext } from 'react'
import ProjectSideBar from './Components/ProjectSideBar'
import NewProject from './Components/NewProject'
import NoProjectSelected from './Components/NoProjectSelected'
import SelectedProject from './Components/SelectedProject'

export const TaskContext = createContext(null);

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id),
      };
    });
  }
  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelStartProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });

  }
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
        selectedProjectId: undefined,
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  console.log(projectsState);

  let content = <TaskContext.Provider value={{ handleAddTask, handleDeleteTask, tasks: projectsState.tasks, projectsState }}>
                  <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
                </TaskContext.Provider>;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelStartProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='min-h-screen h-full flex gap-8 pt-8'>
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId} />
      {content}
    </main>
  )
}

export default App
