import React from 'react'

const DeleteButton = ({index, taskList, setTaskList}) => {

    const deleteTask = (indexDel)=>{
        const newArray = structuredClone(taskList);
        const deleteTask = newArray.filter((elementoActual, index)=>{
            return(
                index != indexDel 
            )
        })
        setTaskList(deleteTask)
    }

  return (
    <button onClick={()=>{deleteTask(index)}}> Delete </button>
  )
}

export default DeleteButton