import './App.css';
import { NavigationPanel } from './components/NavigationPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddRentals } from './components/AddRentals';
  import { BrandName } from './components/BrandName';
// import { RentalProvider } from './context/RentalContext';

function App() {

  return (
   <div>
    <BrandName />
    <NavigationPanel />
    
   </div>
        
    
  );
}

export default App;


