import React, { useState } from 'react';
import { Card,CardBody,CardTitle,CardText, Image, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';

function ReservationDetails(props) {
  const { hall } = props;
  const [paymentType, setPaymentType] = useState('');

  const handlePaymentChange = (event) => {
    setPaymentType(event.target.value);
  };

  return (
    <div className="container  hall-details ">
      <h2 className='my-5 mx-5'>{hall.name}</h2>
      <div className='w-100 my-5 d-flex justify-content-around'><div>
      <Image src={hall.image} alt={hall.name} className='w-100 image-margin' fluid style={{ borderRadius: '5px',height:'400px' }} />
      <Card className="mb-5 shadow px-3"> {/* Added shadow for a subtle effect */}
        <CardTitle className='mx-3 my-4'>
            تفاصيل القاعة
        </CardTitle>
        
        <CardBody>
          <CardText>
            <span className="fw-bold">السعر:</span> {hall.capacity}
          </CardText>
          <CardText>
            <span className="fw-bold">اقصى عدد افراد:</span> {hall.capacity}
          </CardText>
          <CardText>
            <span className="fw-bold">اقصى عدد وجبات:</span> {hall.max_meal}
          </CardText>
          <CardText>
            <span className="fw-bold">المساحه:</span> {hall.area}
          </CardText>
          <CardText>
            <span className="fw-bold">العنوان:</span> {hall.address}
          </CardText>
          <CardText className='mb-3'>
            <span className="fw-bold">رقم القاعة:</span> {hall.hall_number}
          </CardText>
          
          
        </CardBody>
      </Card>

      <h3 style={{ marginBottom: '20px' }}>الحجز</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>طريقة الدفع</Form.Label>
          <Form.Select value={paymentType} onChange={handlePaymentChange}>
            <option value="">اختار طريقة دفع</option>
            <option value="vodafone_cash">فودافون كاش</option>
            <option value="visa"> فيزا</option>
          </Form.Select>
        </Form.Group>
        {paymentType === 'vodafone_cash' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>رقم الهاتف (الذى قمت بالتحويل منه)</Form.Label>
              <Form.Control type="tel" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>معاد الحجز</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
          </>
        )}
        {paymentType === 'visa' && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>رقم الفيزا</Form.Label>
              <Form.Control type="number" required />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between">
              <div style={{ width: '48%' }}>
                <Form.Label>رقم ال cvv</Form.Label>
                <Form.Control type="number" required />
              </div>
              <div style={{ width: '48%' }}>
                <Form.Label>تاريخ الإنتهاء</Form.Label>
                <Form.Control type="month" required />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>اسم صاحب الفيزا</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
          </>
        )}
        <Button variant="primary" type="submit" style={{ padding: '10px 20px' }}>
          احجز
        </Button>
      </Form>
    </div></div>
    </div>
  );
}

export default ReservationDetails;
