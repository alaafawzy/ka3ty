import React, { useContext, useEffect, useState } from 'react';
import MyNavbar from '../component/navbar';
import HomeCarousel from './homecarousel';
import HallCard from './hallCard';
import { Row, /* other components */ } from 'react-bootstrap';
import Footer from '../component/footer';
import { AuthContext } from '../hooks/AuthContext';

function Home() {
  
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)
  const [data, setData] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/hall/list/'); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors (e.g., display error message to user)
      }
    };

    fetchData(); // Call the function to fetch data

    // Cleanup function (optional)
    return () => {
      // Perform any cleanup actions here (e.g., aborting ongoing requests)
    };
  }, []); //
  console.log(data)
  let halls=data
    return (<>
        <MyNavbar/>
        <HomeCarousel/>
        <section>
          <br/>
          <br/>
        <h2 className='my-5 mx-5' >القاعات</h2>
        <Row xs={1} md={3} lg={5} id="test-section" className='home-cards-section'> {/* Adjust grid layout as needed */}
        
        {halls.map((hall) => (
          <HallCard key={hall.id} hall={hall} />
        ))}
      </Row>
      </section>
      <Footer/>
    </>);
}

export default Home;
