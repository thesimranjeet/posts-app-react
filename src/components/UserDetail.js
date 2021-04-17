import React from 'react';
import { Card } from 'react-bootstrap';

const UserDetail = ({ ...props }) => {
  return (
    <>
      <Card className='w-100 m-2'>
        <Card.Body>
          <Card.Text>username : {props.username}</Card.Text>
          <Card.Text>full name : {props.name}</Card.Text>
          <Card.Text>email : {props.email}</Card.Text>
          <Card.Text>website : {props.website}</Card.Text>
          <Card.Text>
            company details : {props.company.name} {props.company.catchPhrase}{' '}
            {props.company.bs}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserDetail;
