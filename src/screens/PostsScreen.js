import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Row, Col } from 'react-bootstrap';

const PostsScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('/posts');
        console.log('fetchUsers called');
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError('Error Occured');
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      {keyword ? (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      ) : null}
      <h1>Latest Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {posts
              .filter((post) => {
                if (!keyword) {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(keyword.toLowerCase())
                ) {
                  return post;
                } else {
                  return false;
                }
              })
              .map((post) => (
                <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
                  <Post
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    user={post.userId}
                  ></Post>
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default PostsScreen;
