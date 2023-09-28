import React, {useState} from 'react'
import TaskList from './TaskList'

const TodoApp = () => {

    const [taskList, setTaskList] = useState([])
    
    const [inputUser, setInputUser] = useState("")

    const handlAddTask = ()=>{
        const newTaskList = structuredClone(taskList);
        newTaskList.push(inputUser);
        setTaskList(newTaskList);
        setInputUser("")
    }

  return (
    <>
    
    <input type='text' onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
    <button onClick={()=>{handlAddTask()}}>send task</button>
    <TaskList taskList={taskList} setTaskList={setTaskList}></TaskList>

    </>
  )
}

export default TodoApp