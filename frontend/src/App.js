import './App.css';
import Register from './authentication/register';
import Login from './authentication/login';
import { Route,Routes} from 'react-router-dom';
import Home from './home/home';
import HallPage from './hallPage';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/hall/:id" element={<HallPage />} />
    </Routes>
  );
}

export default App;
