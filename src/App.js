import './App.css';
import { NavigationPanel } from './components/NavigationPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddRentals } from './components/AddRentals';
  import { BrandName } from './components/BrandName';
import { ViewRentals } from './components/ViewRentals';
import { RentalProvider } from './context/RentalContext';
// import { RentalProvider } from './context/RentalContext';

function App() {

  return (
    <RentalProvider>
      <BrandName />
      <NavigationPanel />
    </RentalProvider>
    
  );
}

export default App;


