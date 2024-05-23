import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Employee from './components/Employee/Employee';
import Category from './components/Category/Category';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/Dashboard' element={<Dashboard />}>
            <Route path='' element={<Home />} />
            <Route path='/Dashboard/Employee' element={<Employee />} />
            <Route path='/Dashboard/Category' element={<Category />} />
            <Route path='/Dashboard/Profile' element={<Profile />} />
            {/* <Route path='/Dashboard/AddCategory' element={< />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
