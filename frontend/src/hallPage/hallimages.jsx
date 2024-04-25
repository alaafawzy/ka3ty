import React from 'react';
import { Carousel, Image, Card, CardBody, CardText, ListGroup, ListGroupItem, Form, Button, CardTitle } from 'react-bootstrap';
import CommentForm from './comment';

function HallDetails(props) {
  const { hall } = props;

  return (
    <div className="container hall-details  w-75">
      <h2>{hall.name}</h2><br/><br/>
      <Carousel className='hall-carousel'>
        {hall.images.map((image) => (
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
            <span className="fw-bold">السعر:</span> {hall.capacity}
          </CardText>
          <CardText>
            <span className="fw-bold">اقصى عدد افراد:</span> {hall.capacity}
          </CardText>
          <CardText>
            <span className="fw-bold">اقصى عدد وجبات:</span> {hall.capacity}
          </CardText>
          <CardText>
            <span className="fw-bold">المساحه:</span> {hall.capacity}
          </CardText>
          <CardText>
            <span className="fw-bold">العنوان:</span> {hall.capacity}
          </CardText>
          <CardText>
            <span className="fw-bold">رقم القاعة:</span> {hall.capacity}
          </CardText>
          
        </CardBody>
      </Card>

      <h3>التعليقات</h3><br/>
      <ListGroup>
        {hall.comments.map((comment) => (
          <ListGroupItem key={comment.name}>
            <div className="d-flex justify-content-between">
              <h6>{comment.name}</h6>
              <small>{comment.date.toDateString()}</small>
            </div>
            <p>{comment.text}</p>
            <br/>
          </ListGroupItem>
        ))}
        {!hall.comments.length && (
          <ListGroupItem>لا توجد تعليقات!</ListGroupItem>
        )}
      </ListGroup>
        <br/>
        <br/>
        <br/>
      {/* Added Comment Form component */}
      <h3>اكتب تعليقاً</h3><br/>
      <CommentForm onSubmit={(comment) => props.addComment(comment)} />
      <br/>
      <br/>
    </div>
  );
}

export default HallDetails;
