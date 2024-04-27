import React, { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../hooks/AuthContext';

const images = [
  {
    src: '/images/5.webp',
    alt: 'Slide 1 image',
    caption: 'Slide 1 caption' // Optional
  },
  {
    src: '/images/6.jpg',
    alt: 'Slide 2 image',
    caption: 'Slide 2 caption' // Optional
  },
  {
    src: '/images/7.webp',
    alt: 'Slide 3 image',
    caption: 'Slide 3 caption' // Optional
  },
  // ... more slides
];
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement your login logic here (e.g., API call, validation)
    try {
      const response = await axios.post('/accounts/login/', {
        email,
        password,
      });

      // Handle successful login response here (e.g., redirect, store token)
      console.log('Login successful:', response.data);
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      navigate('/');
      // Assuming your backend returns a token on successful login:
      // localStorage.setItem('authToken', response.data.token);  // Example

    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login errors (e.g., display error message to user)
    }

  };

  return (
    <>

    <div className="container">
    <div className="row w-100">
    
    
    <div className="col-md-4 form-container ">
      <div className='login-form'>
    <form onSubmit={handleSubmit}>
    <Link to='/'><img className="login-logo" src="/images/k.png" alt="" width="250" height="250"/></Link>
    
    <h1 className="h3 mb-3 fw-normal">تسجيل الدخول</h1>

    <div className="form-floating">
      <input type="email"
        email="email"
        value={email}
        onChange={handleEmailChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">البريد الالكترونى</label>
    </div>
    <br/>
    <div className="form-floating">
      <input type="password" value={password}
        onChange={handlePasswordChange} className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">كلمة المرور</label>
    </div>
    
    <br/>
    <button className="w-50 btn btn-lg btn-primary login-btn" type="submit">تسجيل دخول</button>
    <Link to="/register" className="dropdownbtn hoverbutt login-switch "> إنشاء حساب</Link>
  </form>
      </div>
      </div>


      
      <div className="col-md-8 slider-container ">
      
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.src} className='login-image'>
            <img
              className="d-block w-100 login-image"
              src={image.src}
              alt={image.alt}
            />
            
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </div>
  </div>
  </>);
}

export default Login;
