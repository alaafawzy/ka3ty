import React from 'react';
import MyNavbar from '../component/navbar';
import HomeCarousel from './homecarousel';
import HallCard from './hallCard';
import { Row, /* other components */ } from 'react-bootstrap';
import Footer from '../component/footer';
const hallsData = [
    {
      id: 1,
      name: 'رويال كلوب',
      imageUrl: '/images/test/1.jpg',
      capacity: 200,
      description: 'قاعة فى غاية الجمال و الاناقه',
      link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
      buttonText: 'احجز الان',
      price:'15000',
      max_numbers:'300',
    },
    {
        id: 1,
        name: 'دار البنك الاهلى',
        imageUrl: '/images/test/2.jpg',
        capacity: 250,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/2', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: '/images/test/3.jpg',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: '/images/test/4.jpg',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: '/images/test/5.jpg',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: '/images/test/6.jpeg',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: '/images/test/7.jpg',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: '/images/test/8.jpg',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: '/images/test/9.jpg',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: 'https://via.placeholder.com/300x200/007bff?text=Hall+Image',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
      {
        id: 1,
        name: 'Grand Hall',
        imageUrl: 'https://via.placeholder.com/300x200/007bff?text=Hall+Image',
        capacity: 200,
        description: 'قاعة فى غاية الجمال و الاناقه',
        link: '/halls/1', // Link to hall details or reservation page (replace with your actual URL)
        buttonText: 'Reserve Hall',
        price:'15000',
        max_numbers:'300',
      },
    // ... other halls data
  ];
function Home() {
    return (<>
        <MyNavbar/>
        <HomeCarousel/>
        <section>
          <br/>
          <br/>
        <h2 className='my-5 mx-5' >القاعات</h2>
        <Row xs={1} md={3} lg={5} id="test-section" className='home-cards-section'> {/* Adjust grid layout as needed */}
        
        {hallsData.map((hall) => (
          <HallCard key={hall.id} hall={hall} />
        ))}
      </Row>
      </section>
      <Footer/>
    </>);
}

export default Home;
