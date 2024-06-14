import './App.css';
import Navbar from './Navbar';
import OrderTable from './OrdersTable';
import CurrentMenu from './menu';


function App() {
  return (
    <>
     <Navbar messname = "Shital Mess"/>
     <OrderTable/>
     <CurrentMenu/>

     </>
     
  );
}

export default App;
