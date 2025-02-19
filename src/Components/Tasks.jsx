import React, { useContext } from 'react'
import NewTask from './NewTask'
import { TaskContext } from '../App';
function Tasks() {
    const { handleAddTask, handleDeleteTask, tasks, projectsState } = useContext(TaskContext);

    const filteredTasks = tasks?.filter((task) => task.projectId === projectsState.selectedProjectId);
    return (
        <section>
            <h2 className='text-2xl font-bold mb-4 text-stone-700'>Tasks</h2>
            <NewTask />
            {(filteredTasks.length === 0 ?
                <p className='text-stone-900 mb-32'>This project doesn't have any tasks yet.</p>
                :
                <ul className='p-4 mt-8 mb-30 rounded-md bg-stone-100'>
                    {filteredTasks.map(task =>
                        <li key={task.id} className='flex items-center justify-between my-4 min-h-12'> 
                            <span>{task.text}</span>
                            <button 
                            className='text-red-700 border rounded-sm px-1 ml-5 hover:bg-red-500 hover:text-stone-50'
                            onClick={() => handleDeleteTask(task.id)}>Clear</button>
                        </li>
                    )}
                </ul>
            )}

        </section>
    )
}

export default Tasks