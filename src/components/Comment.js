import React from 'react';
import { Card } from 'react-bootstrap';

const Comment = ({ name, email, body }) => {
  return (
    <>
      <Card className='w-100 m-2'>
        <Card.Body>
          <Card.Title className='fw-bold'>{name}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Card.Text>Posted by - {email}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Comment;
