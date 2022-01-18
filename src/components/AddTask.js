import React from 'react';
import './AddTask.css';

const AddTask = () => {
  return (
    <form>
      <div className='add-task'>
        <div className='form-control'>
          <label>Task</label>
          <input type='text' placeholder='Add Task' />
        </div>
        <div className='form-control'>
          <label>Day & Time</label>
          <input type='text' placeholder='Add Day & Time' />
        </div>
        <div className='form-control form-control-box'>
          <label>Set Reminder</label>
          <input type='checkbox' className='checkbox' />
        </div>
        <input type='submit' className='btn' value='Save Task' />
      </div>
    </form>
  );
};

export default AddTask;
