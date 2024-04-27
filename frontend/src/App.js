import './App.css';
import Register from './authentication/register';
import Login from './authentication/login';
import { Route,Routes} from 'react-router-dom';
import Home from './home/home';
import HallPage from './hallPage';
import Reservation from './reservation';
import Logout from './authentication/logout';
import { AuthProvider } from './hooks/AuthContext';
function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/hall/:id" element={<HallPage />} />
      <Route path="/hall/:id/reserve" element={<Reservation />} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
