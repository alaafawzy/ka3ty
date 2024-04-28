import React from 'react';
import { Carousel, Image, Card, CardBody, CardText, ListGroup, ListGroupItem, Form, Button, CardTitle } from 'react-bootstrap';
import CommentForm from './comment';
import { useNavigate } from "react-router-dom";

function HallDetails(props) {
  const { hall } = props;
  const navigate = useNavigate();
  const reserve=()=>{
    const reserve_url='/hall/'+String(hall.id)+'/reserve'
    navigate(reserve_url);
   }
  let images=['https://via.placeholder.com/300x200/007bff?text=Hall+Image'];
  if(hall.attachments){
   images=hall.attachments
  }
   console.log(images);
   
  return (
    <div className="container hall-details  w-75">
      <h2>{hall.name}</h2><br/><br/>
      <Carousel className='hall-carousel'>
        {hall.attachments&&hall.attachments.map((image) => (
          <Carousel.Item key={image}>
            <Image src={image} alt={hall.name} fluid className='hall-carousel-image'/>
          </Carousel.Item>
        ))}
      </Carousel>
      <br/>
      <Card className="mb-5 shadow px-3"> {/* Added shadow for a subtle effect */}
        <CardTitle className='mx-3 my-3'>
            تفاصيل الخدمة
        </CardTitle>
        <br/>
        <CardBody>
          <CardText>
            <span className="fw-bold">السعر:</span> {hall.price}
          </CardText>
          <CardText>
            <span className="fw-bold">اقصى عدد افراد:</span> {hall.max_visitors}
          </CardText>
          <CardText>
            <span className="fw-bold">اقصى عدد وجبات:</span> {hall.max_meal}
          </CardText>
          <CardText>
            <span className="fw-bold">المساحه:</span> {hall.area}
          </CardText>
          <CardText>
            <span className="fw-bold">العنوان:</span> {hall.location}
          </CardText>
          <CardText>
            <span className="fw-bold">رقم القاعة:</span> {hall.hall_number}
          </CardText>
          
        </CardBody>
      </Card>

      <h3>التعليقات</h3><br/>
      <ListGroup>
        {hall.comments&&hall.comments.map((comment) => (
          <ListGroupItem key={comment.user}>
            <div className="d-flex justify-content-between">
              <h6>{comment.user}</h6>
              {/* <small>{comment.date.toDateString()}</small> */}
            </div>
            <p>{comment.comment}</p>
            <br/>
          </ListGroupItem>
        ))}
        {/* {hall.comments===[] && (
          <ListGroupItem>لا توجد تعليقات!</ListGroupItem>
        )} */}
      </ListGroup>
        <br/>
        <br/>
        <br/>
      {/* Added Comment Form component */}
      <h3>اكتب تعليقاً</h3><br/>
      <CommentForm  id={hall.id}/>
      <br/>
      <br/>
      <div className='d-flex justify-content-around'>
      <Button variant="primary" className='reserve-now-button' onClick={reserve}>
            احجز الان
          </Button>
          </div>
          <br/>
          <br/>
    </div>
  );
}

export default HallDetails;
