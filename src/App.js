import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: `Doctor's Appointment`,
      day: `Feb 5th at 2:30pm`,
      reminder: false,
    },
    {
      id: 2,
      text: `Meeting at School`,
      day: `Feb 6th at 11:30pm`,
      reminder: false,
    },
    {
      id: 3,
      text: `Food Shopping`,
      day: `Feb 8th at 6:00pm`,
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };
  return (
    <div className='App'>
      <Header title='Task Tracker' />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
