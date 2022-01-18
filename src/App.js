import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';

const tasks = [
  {
    id: 1,
    text: `Doctor's Appointment`,
    day: `Feb 5th at 2:30pm`,
    reminder: false,
  },
  {
    id: 1,
    text: `Meeting at School`,
    day: `Feb 6th at 11:30pm`,
    reminder: false,
  },
  {
    id: 1,
    text: `Food Shopping`,
    day: `Feb 8th at 6:00pm`,
    reminder: false,
  },
];

function App() {
  return (
    <div className='App'>
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
