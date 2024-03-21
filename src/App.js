import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/e' element={<EmployeeForm/>}/>
       
      </Routes>
      
    </div>
  );
}

export default App;
