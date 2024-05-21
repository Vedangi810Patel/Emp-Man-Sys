import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<LogIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
