import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<LogIn/>}/>
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
