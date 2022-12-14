import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
