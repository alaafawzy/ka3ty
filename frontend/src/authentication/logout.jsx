import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../hooks/AuthContext';
function Logout() {
  const navigate = useNavigate();
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.get('/accounts/logout'); // Replace with your logout API endpoint
        setIsLoggedIn(false);
        console.log(isLoggedIn);
        navigate('/'); // Redirect to home page
      } catch (error) {
        console.error('Logout failed:', error);
        // Handle logout errors (e.g., display error message to user)
      }
    };

    handleLogout();
  }, []);

  return (
    <div>
      {/* Optional: Display a message while logging out */}
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
