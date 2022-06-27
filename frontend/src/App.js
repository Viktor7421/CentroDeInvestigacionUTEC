import Dashboard from './components/Dashboard/Dashboard'
import ApplicationForm from './components/ApplicationForm/ApplicationForm'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='logout' element={<Logout />} />
      <Route path='home' element={<Dashboard />} />
      <Route path='form' element={<ApplicationForm />} />
    </Routes>
  );
}

export default App;
