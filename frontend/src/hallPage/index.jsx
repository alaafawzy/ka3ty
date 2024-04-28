import React, { useEffect, useState } from "react";
import MyNavbar from "../component/navbar";
import Footer from "../component/footer";
import HallDetails from "./hallimages";
import { useParams } from 'react-router-dom';
import axios from "axios";

function HallPage(){
  const [data, setData] = useState({}); // State to store fetched data
  const { id } = useParams();
  const url='/hall/'+String(id)+'/show/'
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url, {
  //       });
  //       if(response.ok){ console.log('yes')
  //       setData(response.data);}
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // Handle errors (e.g., display error message to user)
  //     }
  //   };

  //   fetchData(); // Call the function to fetch data

  // }, []); //
  useEffect(()=>{
    fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then(data=>{
            setData(data);
        })
        .catch(error=>{
            console.error("error fetching data",error);
        })
},[])
  console.log(data.attachments)
  let hall={}
  hall=data
  console.log(hall);
    return (
        <>
            <MyNavbar/>
            <HallDetails hall={hall}/>
            <Footer/>
        </>
    );
}
export default HallPage;