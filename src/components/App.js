import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login } from './';
import jwtDecode from 'jwt-decode';



const Signup = () => <div>Signup</div>;

// const Home = () => <div>Home</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          
       
  {/* <Navbar /> */}
  {/* <PostsList posts={posts}/> */}
  {/* <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
   </li>
    <li>
     <Link to="/signup">Signup</Link >
    </li>
  </ul> */}
 {/* element={(props) => {
                return <Home {...props} posts={posts} />;
              }} */}
<Routes> 
{/* <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            /> */}
            <Route path="/" element={<Home posts={posts} />}/> 
            {/* //something passed to home for that only props is there */}
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route element ={<Page404 />} />
        </Routes>

      
       </div>
      
      </Router>
    );
  }
}
// function Invoice=(props)=> {
//   return <Home 
//   {...props} posts={posts} />;
//   console.log("rops");
// } 

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
