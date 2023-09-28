import React, {useState} from 'react'

const TodoApp = () => {
    const [taskList, setTaskList] = useState([])
    
    const [inputUser, setInputUser] = useState("")

    const handlAddTask = ()=>{
        const newTaskList = structuredClone(taskList);
        newTaskList.push(inputUser);
        setTaskList(newTaskList);
        setInputUser("")
    }

    const showTaskList = taskList.map((actualElement)=>{
        return(
            <>
            <ul>
                <li>{actualElement}</li>
            </ul>
            </>
        )
    })


  return (
    <>
    <input type='text' onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
    <button onClick={()=>{handlAddTask()}}>send task</button>
    {showTaskList}
    </>
  )
}

export default TodoApp