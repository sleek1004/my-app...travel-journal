import './App.css';
import Journal from './components/Journal'
import Navbar from './components/Navbar'
import data from './components/data'

function App() {
  const Journals = data.map(item=>{
    return(
      <Journal
         key={item.id}
         item={item}
         />
    )
  })
  return (
    <div>
      <Navbar/>
      {Journals}

      
    </div>
  );
}

export default App;
