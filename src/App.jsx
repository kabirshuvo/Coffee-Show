import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {
 
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      
      <h1 className='text-5xl text-purple-700'>Coffee-Show coffeeCount {coffees.length}</h1>

      {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          
          ></CoffeeCard>)
      }
      
    </>
  )
}

export default App
