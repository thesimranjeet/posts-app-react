import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import Comment from '../components/Comment';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Row, Col } from 'react-bootstrap';

const PostScreen = ({ match }) => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      console.log('trying');
      try {
        const res = await axios.get(`/posts/${match.params.id}`);
        console.log('fetchUsers called' + res.data);
        setPost(res.data);
        const res2 = await axios.get(`/posts/${match.params.id}/comments`);
        console.log('fetchUsers called' + res2.data);
        setComments(res2.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Error Occured');
      }
    };
    fetchPost();
  }, [match.params.id]);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col key={post.id} sm={12} md={12} lg={12} xl={12}>
              <h1>Post - {match.params.id}</h1>
              <PostDetail
                id={post.id}
                title={post.title}
                body={post.body}
                user={post.userId}
              ></PostDetail>
            </Col>

            <h3>Comments</h3>
            {comments.map((c) => (
              <Col key={c.id} sm={12} md={12} lg={12} xl={12}>
                <Comment
                  id={c.id}
                  name={c.name}
                  email={c.email}
                  body={c.body}
                  postId={c.userId}
                ></Comment>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default PostScreen;
