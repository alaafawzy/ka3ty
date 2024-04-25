import React from "react";
import MyNavbar from "../component/navbar";
import Footer from "../component/footer";
import HallDetails from "./hallimages";
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
    capacity: 200,
    description:
      'A spacious hall ideal for large events. It features a state-of-the-art sound system and a large stage.',
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
function HallPage(){

    return (
        <>
            <MyNavbar/>
            <HallDetails hall={hallData}/>
            <Footer/>
        </>
    );
}
export default HallPage;