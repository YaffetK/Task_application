import { useState, useEffect } from "react"
import {useParams, useNavigate, useLocation} from 'react-router-dom'
import Button from "./Button"

const TaskDetails = () => {
    const [loading,setLoading] = useState(true)
    const [task,setTasks] = useState ({})
 

    const params = useParams()
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch (`http://
            localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if (res.status ===404){
                navigate('/')
            }

            setTasks(data)
            setLoading(false)
        }

        fetchTask()
    })
 

  return loading ? (
    <h3>Loading...</h3>
  ) : (
        <div>
            <p> {pathname}</p>
            <h3> {task.text}</h3>
            <p> {task.day}</p>
            <Button 
            text='Go Back'
            onClick={ () => {
                navigate(-1)
            }} />
        </div>

  )
}

export default TaskDetails