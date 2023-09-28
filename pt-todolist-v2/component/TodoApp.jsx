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

    const checkTask = (index)=>{
        const newTaskList = structuredClone(taskList);
        const completedTask = newTaskList[index].includes('✅'); // devuelve True/False
        if (!completedTask){
            newTaskList[index] = `✅ ${newTaskList[index]}`
            setTaskList(newTaskList)
        }
    }

    const deleteTask = (indexDel)=>{
        const newArray = structuredClone(taskList);
        const deleteTask = newArray.filter((elementoActual, index)=>{
            return(
                index != indexDel 
            )
        })
        setTaskList(deleteTask)
    }

    const showTaskList = taskList.map((actualElement, index)=>{
        return(
            <>
            <ul>
                <li>
                    {actualElement}
                    <button onClick={()=>{checkTask(index)}}> Check </button>
                    <button onClick={()=>{deleteTask(index)}}> Delete </button>
                </li>
                
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