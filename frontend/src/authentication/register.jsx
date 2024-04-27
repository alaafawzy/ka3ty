import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import axios from "axios";

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



function Register() {
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhone_number] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation (replace with more robust validation)
    if (!email || !first_name || !last_name || !password ||!phone_number) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate email format (optional, consider using a library like `yup`)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // Prepare registration data
      const registrationData = {
        email,
        first_name,
        last_name,
        password,
        phone_number, // Include phone number if necessary for your application
      };
      const response = await axios.post('/accounts/register/', {
        email,
        password,
        first_name,
        last_name,
        phone_number
      });
      // Send registration data to server (replace with your actual API call)
      console.log(response.status)
      console.log(response.ok)
      console.log(response.status==201)
      if (!response.status==201) {
        throw new Error('Registration failed!');
      }

      // Handle successful registration (e.g., clear form, redirect)
      console.log('Registration successful!');
      setEmail('');
      setFirst_name('');
      setLast_name('');
      setPassword('');
      setPhone_number(''); // Clear phone number field as well
      alert('Registration success. Please login.');
    } catch (error) {
      // Handle errors appropriately (e.g., display error message)
      console.error('Registration error:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <>

    <div className="container">
    <div className="row w-100">
    
    <div className="col-md-4 form-container ">
      <div className='login-form'>
    <form onSubmit={handleSubmit}>
    <Link to='/'><img className="login-logo" src="/images/k.png" alt="" width="200" height="200"/></Link>
    
    <h1 className="h3 mb-3 fw-normal"> تسجيل حساب</h1>

    <div className="form-floating">
      <input
        type="email"
        id="email"
        value={email}
        className="form-control"
        onChange={(event) => setEmail(event.target.value)}
        placeholder='email'
        required
      />
        <label for="email">البريد الالكترونى</label>
    </div><br/>
    <div className='d-flex'>
    <div className="form-floating regist-first-name">
      <input
        type="text"
        id="first_name"
        name="first_name"
        placeholder='firstname'
        className="form-control"
        value={first_name}
        onChange={(event) => setFirst_name(event.target.value)}
        required
      />
      <label for="first_name">الاسم الاول</label>
      </div>
      <div className="form-floating regist-last-name">
      
      <input
        type="text"
        id="last_name"
        name="last_name"
        placeholder='lastname'
        className="form-control"
        value={last_name}
        onChange={(event) => setLast_name(event.target.value)}
        required
      /><label for="last_name">الاسم الاخير</label>
      </div>
      </div>
      <br/>
      <div className="form-floating">
      
      <input
        type="password"
        id="password"
        name="password"
        placeholder='password'
        className="form-control"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      /><label for="password">كلمة المرور</label>
      </div><br/>
      <div className="form-floating">
      
      <input
        type="tel" // Use "tel" for phone number input
        id="phone_number"
        name="phone_number"
        placeholder='phonenumber'
        className="form-control"
        value={phone_number}
        onChange={(event) => setPhone_number(event.target.value)}
      /><label for="phone_number">رقم الهاتف</label>
      
      </div>
      <br/>
      <button className="w-50 btn btn-lg btn-primary login-btn " type="submit">تسجيل </button>
      <Link to="/login" className="dropdownbtn hoverbutt login-switch ">تسجيل دخول</Link>
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
  </>
  );
}

export default Register;

    
    
{/*     
    <div className="form-floating">
      <input type="email"
        email="email"
        value={email}
        onChange={handleEmailChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">البريد الالكترونى</label>
    </div>
    <br/><div className="col-md-4 form-container ">
      <div className='login-form'>
    <form onSubmit={handleSubmit}>
    <img
    <div className="form-floating">
      <input type="password" value={password}
        onChange={handlePasswordChange} className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">كلمة المرور</label>
    </div>
    
    <br/>
    <button className="w-50 btn btn-lg btn-primary login-btn" type="submit">تسجيل دخول</button>
  </form>
      </div>
      </div>
 */}

      
     
    
