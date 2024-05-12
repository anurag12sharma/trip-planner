import './App.css';
import {useState} from 'react';
import Tours from './components/Tours';
import data from './data'

function App() {
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tours => tours.id !== id);
    setTours(newTour);
  }

  return (
    <div>
      <h2>Trip Planner</h2>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
