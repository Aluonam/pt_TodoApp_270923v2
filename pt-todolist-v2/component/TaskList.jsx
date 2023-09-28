import React from 'react'
import DeleteButton from './DeleteButton';
import CheckButton from './CheckButton';

const TaskList = ({taskList, setTaskList}) => {

  

      const showTaskList = taskList.map((actualElement, index)=>{
        return(
            <>
            <ul>
                <li>
                    {actualElement}
                    <CheckButton index={index} taskList={taskList} setTaskList={setTaskList}></CheckButton>
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