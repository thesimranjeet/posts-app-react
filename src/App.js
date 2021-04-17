// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import PostScreen from './screens/PostScreen';
import PostsScreen from './screens/PostsScreen';
import UserScreen from './screens/UserScreen';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/users/:id' component={UserScreen} />
          <Route path='/posts/:id' component={PostScreen} />
          <Route path='/search/:keyword' component={PostsScreen} exact />
          <Route path='/' component={PostsScreen} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
