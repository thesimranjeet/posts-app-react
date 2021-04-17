import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body, user }) => {
  return (
    <>
      <Link
        to={`/posts/` + id}
        className='text-justify text-white text-decoration-none'
      >
        <Card className='w-100 m-2'>
          <Card.Body>
            <Card.Title className='fw-bold'>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
            <Card.Text>
              Posted by
              <Link to={`/users/` + user} className='btn btn-primary ml-2'>
                User - {user}
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Post;
