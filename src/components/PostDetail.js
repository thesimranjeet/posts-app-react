import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostDetail = ({ id, title, body, user }) => {
  return (
    <>
      <Card className='w-100 m-2'>
        <Card.Body>
          <h3>{title}</h3>
          <Card.Text>{body}</Card.Text>
          <Card.Text>
            Posted by
            <Link to={`/users/` + user} className='btn btn-primary ml-2'>
              User - {user}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostDetail;
