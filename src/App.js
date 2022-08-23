import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {



  const [tasks,setTasks]= useState([
    {id:1,
      text:'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
    id:2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1.30pm',
    reminder:true,
  },
  {
    id:3,
    text:'Food shopping',
    day: 'Feb 5th at 2.30pm',
    reminder:false,
  },
])

    // Add Task
const addTask = (task) => {
    const id= Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks(...tasks, newTask)
   
}

    // Delete Task
  const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !==id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => 
      task.id ===id ? {...task,reminder: !task.reminder} : task)
                      //...task är detsamma som:
                      //id: task.id, text: task.text, day: task.day, reminder: task.reminder  
    
    )
  }

  return (
  <div className='container'>
   <Header title={'Task Runner'}/>
   <AddTask onAdd={addTask}/>
   {tasks.length>0? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder }/>)
   :('No tasks available')}

  </div>
  );
  }
export default App;
