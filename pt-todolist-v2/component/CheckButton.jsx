import React from 'react'

const CheckButton = ({index, taskList, setTaskList}) => {
    
    const checkTask = (index)=>{
        const newTaskList = structuredClone(taskList);
        const completedTask = newTaskList[index].includes('✅'); // devuelve True/False
        if (!completedTask){
            newTaskList[index] = `✅ ${newTaskList[index]}`
            setTaskList(newTaskList)
        }
    }

  return (
    <button onClick={()=>{checkTask(index)}}> Check </button>
  )
}

export default CheckButton