import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const inputRef = useRef();

  const [task, setTask] = useState("");

  const [taskList, setTasklist] = useState([]);

  const [error, setError] = useState("");

  //focus on input whenever refresh the page / submit
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(task)
    {
      setTasklist([...taskList, task])
      setTask("");
      setError("")
    }else{
      setError("Task must not empty.")
      inputRef.current.focus();
    }
  
  };

  return (
    <>

    <div className='container mt-5 d-flex justify-content-center'>
      <div className='border p-4'>
        <h1 className='text-center mb-4'>Task App</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='text' className='form-control' 
            placeholder='Enter a Task' ref={inputRef} value={task}
            onChange={(event) => setTask(event.target.value)}/>
          </div>
          {error ? <p className='error text-danger mt-2 fs-11'>{error}</p> : null}
          <div className='d-flex justify-content-center mt-4'>
            <button type="submit" className='btn btn-primary'>Add Task</button>
          </div>
        </form>
        <ul className='list-group mt-3'>
          {
            taskList.map((task, index) => 
            <li key={index} className='list-group-item'>{task}</li>
            )
          }
        </ul>
      </div>
    </div>
  
    </>
  )
}

export default App
