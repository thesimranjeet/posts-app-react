import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import UserDetail from '../components/UserDetail';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Row, Col } from 'react-bootstrap';

const UserScreen = ({ match }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/users/${match.params.id}`);
        console.log('fetchUsers called');
        setUser(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Error Occured');
      }
    };
    fetchUser();
  }, [match.params.id]);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <h1>User Detail : {user.username}</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col key={user.id} sm={12} md={12} lg={12} xl={12}>
              <UserDetail {...user}></UserDetail>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default UserScreen;
