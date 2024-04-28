import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
function CommentForm(props) {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState();
  const { id } = props;
  const navigate = useNavigate();
    
  const handleSubmit = (event) => {
    event.preventDefault();
     // Pass comment data to parent component
     const url='/hall/'+String(id)+'/rate/';
     setRate(5)
     try {
      const response =  axios.post(url, {
        comment,
        rate:5,
      });

      // Handle successful login response here (e.g., redirect, store token)
      console.log('comment done:', response.data);
      const same_url='/hall/'+String(id)
      // navigate(same_url);
      window.location.reload();

    } catch (error) {
      console.error('Comment failed:', error.response.data);
      // Handle login errors (e.g., display error message to user)
    }
    setComment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} value={comment} onChange={(e) => setComment(e.target.value)} required />

      </Form.Group>
      <Button variant="primary" type="submit">
        ارسل التعليق
      </Button>
      <br/>
      <br/>
    </Form>
  );
}

export default CommentForm;
