import './App.css';
import Navbar from './Navbar';
import OrderTable from './OrdersTable';
import CurrentMenu from './menu';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import { BrowserRouter } from 'react-router-dom';
import Register from './Pages/Register';
import LoginForm from './Pages/Login';

function App() {
  return (
    <>
     
     <Navbar messname = "Shital Mess"/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        
      
      </Routes>
    </BrowserRouter>

     </>
     
  );
}

export default App;
