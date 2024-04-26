import React from "react";
import MyNavbar from "../component/navbar";
import Footer from "../component/footer";
import ReservationDetails from "./forms";
const hallData = {
    id: 1,
    name: 'دار البنك الاهلى',
    images: [
      '/images/bankahly/1.jpg',
      '/images/bankahly/2.jpg',
      '/images/bankahly/3.jpg',
      '/images/bankahly/4.jpg',
      // ... more image URLs
    ],
    image:'/images/bankahly/1.jpg',
    capacity: 200,
    description:
      'A spacious hall ideal for large events. It features a state-of-the-art sound system and a large stage.',
    max_meal:200,
    area:350,
    hall_number:1,
    address:'مدينة السلام اطلس 4',
    comments: [
      {
        name: 'mohamed emad',
        text: 'قاعة جيدة جدا و نظيفة',
        date: new Date(), // Or a formatted date string
      },
      {
        name: 'ahmed hussien',
        text: 'قاعة وحشة جداً',
        date: new Date(), // Or a formatted date string
      },
      // ... more comments
    ],
  };
function Reservation(){
    return(
        <>
        <MyNavbar/>
        <ReservationDetails hall={hallData}/>
        <Footer/>
        </>
    );
}
export default Reservation;