import React from 'react';
import { TaskContainer } from './styles';

interface TaskProps {
  id: number;
  taskName: string;
  isChecked: boolean;
  editTask: (id:number) => void;
  deleteTask: (id:number) => void;
  handleTaskCompletion: (id:number) => void;
}

export function Task({id, taskName, isChecked, editTask, deleteTask, handleTaskCompletion }: TaskProps) {
  return (
    <TaskContainer key={id} id={taskName}>
      <div className={`${isChecked ? 'completed' : ''} task-check`}>
        <label className='checkbox-container'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={() => handleTaskCompletion(id)}
          />
          <span className='checkmark'></span>
        </label>
        <p>{taskName}</p>
      </div>
      <div className='action-buttons'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </TaskContainer>
  )
}