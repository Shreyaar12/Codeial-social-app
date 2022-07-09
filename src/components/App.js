import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navigate ,Outlet} from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './';
import jwt from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

const Settings = () => <div>Setting</div>;

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;

  
    // <Route
    //   path={path}
    //   render={(props) => {
    //     return isLoggedin ? <Component {...props} /> : <Navigate to="/login" />;
    //   }}    />
    // console.log(isLoggedin );
    return isLoggedin ? <Outlet/> : <Navigate to="/login" />

};


// const Home = () => <div>Home</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  
  const token = localStorage.getItem('token');
  if (token) {
    const user = jwt(token);

    // console.log('user', user);
    this.props.dispatch(
      authenticateUser({
        email: user.email,
        _id: user._id,
        name: user.name,
      })
    );
  }
}

  render() {
    console.log('this.props',this.props);

    const { posts,auth } = this.props;
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
{/*           
          <PrivateRoute
              path="/settings"
              element={<Settings />}
              isLoggedin = {true}
            /> */}
            <Route exact path="/settings" element={ <PrivateRoute isLoggedin = {auth.isLoggedin}><Settings/></PrivateRoute>}/>
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
    auth: state.auth
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
