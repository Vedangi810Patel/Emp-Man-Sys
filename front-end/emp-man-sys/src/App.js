import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
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
