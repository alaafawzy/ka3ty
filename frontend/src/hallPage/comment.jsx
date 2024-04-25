import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CommentForm(props) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ text }); // Pass comment data to parent component
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} value={text} onChange={(e) => setText(e.target.value)} required />
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
