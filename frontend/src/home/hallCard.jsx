import React from "react";
import { Card, Image, Col, Button } from 'react-bootstrap'; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HallCard(props) {
  const navigate = useNavigate();
  const { hall } = props;
     const url='/hall/'+String(hall.id)
     const reserve=()=>{
      const reserve_url='/hall/'+String(hall.id)+'/reserve'
      navigate(reserve_url);
     }
     let images=hall.attachments
    return(<>
    <Col xs={10} md={4} lg={3} className="my-3 "> {/* Adjust column size as needed */}
      <Card className="home-card-box">
        <Link to={url} className="w-100">
        <Image src={images[0]} alt={hall.name} className="home-card-image" thumbnail />
        </Link>
        <Card.Body >
          <Card.Title>{hall.name}</Card.Title>
          <Card.Text>{hall.description}</Card.Text>
          <Card.Text>المساحة: {hall.area}</Card.Text>
          <Card.Text>السعر: {hall.price}</Card.Text>
          <Card.Text>اقصى عدد افراد: {hall.max_visitors}</Card.Text>
          <Card.Text>اقصى عدد وجبات: {hall.max_meal}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary" onClick={reserve}>
            احجز الان
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  </>);
}
export default HallCard;