import React from 'react';
import './Task.css';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
  return (
    <div className='task-list'>
      <p className='task'>
        {task.text} <FaTimes style={{ color: 'red' }} />
      </p>
      <p className='task-day'>{task.day}</p>
    </div>
  );
};

export default Task;
