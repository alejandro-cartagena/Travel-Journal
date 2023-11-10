import './App.css';
import NavBar from './components/NavBar';
import TravelCard from './components/TravelCard';
import data from './Data/data'

function App() {
  
  const travelCards = data.map(item => {
    return <TravelCard 
              key={item.id}
              item={item}
          />
  })


  return (
    <div className="App">
      <NavBar />
      <div className="container">
        {travelCards}
      </div>
      
    </div>
  );
}

export default App;
