import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation (replace with more robust validation)
    if (!email || !firstName || !lastName || !password) {
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
        firstName,
        lastName,
        password,
        phoneNumber, // Include phone number if necessary for your application
      };

      // Send registration data to server (replace with your actual API call)
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        throw new Error('Registration failed!');
      }

      // Handle successful registration (e.g., clear form, redirect)
      console.log('Registration successful!');
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      setPhoneNumber(''); // Clear phone number field as well
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
        id="firstName"
        name="firstName"
        placeholder='firstname'
        className="form-control"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />
      <label for="firstName">الاسم الاول</label>
      </div>
      <div className="form-floating regist-last-name">
      
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder='lastname'
        className="form-control"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      /><label for="lastName">الاسم الاخير</label>
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
        id="phoneNumber"
        name="phoneNumber"
        placeholder='phonenumber'
        className="form-control"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      /><label for="phoneNumber">رقم الهاتف</label>
      
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

      
     
    
