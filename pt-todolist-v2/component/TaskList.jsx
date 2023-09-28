import React from 'react'
import DeleteButton from './DeleteButton';

const TaskList = ({taskList, setTaskList}) => {

  
    const checkTask = (index)=>{
      const newTaskList = structuredClone(taskList);
      const completedTask = newTaskList[index].includes('✅'); // devuelve True/False
      if (!completedTask){
          newTaskList[index] = `✅ ${newTaskList[index]}`
          setTaskList(newTaskList)
      }
  }

   


      const showTaskList = taskList.map((actualElement, index)=>{
        return(
            <>
            <ul>
                <li>
                    {actualElement}
                    <button onClick={()=>{checkTask(index)}}> Check </button>
                    <DeleteButton index={index} taskList={taskList} setTaskList={setTaskList}></DeleteButton>
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