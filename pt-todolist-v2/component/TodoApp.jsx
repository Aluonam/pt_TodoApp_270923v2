import React, {useState} from 'react'

const TodoApp = () => {
    const [taskList, setTaskList] = useState([])
    
    const [inputUser, setInputUser] = useState("")

  return (
    <>
    <input type='text' onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
    <button onClick={()=>{setTaskList(inputUser)}}>send task</button>
    {taskList}
    </>
  )
}

export default TodoApp