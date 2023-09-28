import React from 'react'

const TaskList = ({taskList, setTaskList}) => {

  
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
    <div>{showTaskList}</div>
  )
}

export default TaskList