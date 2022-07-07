import Dashboard from './components/Dashboard/Dashboard';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='' element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path='home/*' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
