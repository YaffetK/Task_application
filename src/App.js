import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {

 const [showAddTask, setShowTask] = useState(false)



  const [tasks,setTasks]= useState([])

  useEffect(() => {
    const fetchTaks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      return data
    }
    fetchTaks()
  }, [] )

    // Add Task
const addTask = (task) => {
    const id= Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
   
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
   <Header title={'Task Runner'} onAdd= {() => setShowTask(!showAddTask)}
   showAdd= {showAddTask}/>

    {/* // om 'showAddTask' är true då visas komponenten */}
   {showAddTask && <AddTask onAdd={addTask}/>}
   {tasks.length>0? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder }/>)
   :('No tasks available')}

  </div>
  );
  }
export default App;
