import React ,{useState}   from 'react'
import { getDatabase, ref, set,push } from "firebase/database";

const Practice = () => {
    const[task, setTask] = useState('')
    const [error, setError] = useState(''); // new state for error

    const handleTask = (e)=>{
        setTask(e.target.value)
    }
    
    const handleSubmit = ()=>{
        const db = getDatabase();
  set(push(ref(db, 'todolist/' )), {
    task:task
  }).then(()=>{
    console.log("data sent")
  }).catch((err)=>{
    console.log(err)
  })

        if(!task)
            setError('Error: Task cannot be empty!');
        else{
            setError('')
        }
       
    }

  return (
    <div>
    <input onChange={handleTask}  className='border' type="text" />
    <button onClick={handleSubmit} className='border' >Submit</button>
    {error && <p className='text-red-500'>{error}</p>} {/* show error ,“If error is truthy (not empty, not false), THEN render what comes after the &&.”

*/}
    </div>
  )
}

export default Practice