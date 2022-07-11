import React, { Children, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route , Routes,useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navigate ,Outlet} from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
import {
  Home,
  Navbar,
  Page404,
  Login,
  Signup,
  Settings,
  UserProfile,
} from './';
import jwt from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';


const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin,children,location } = privateRouteProps;

//     return (
//       <Route
//       path={path}
//       render={(props) => {
//         console.log('props', props);
//         console.log('isLoggedin', isLoggedin);
//         return isLoggedin ? (
//           <Component {...props} />
//         ) : (
//           <Navigate
//             to={{
//               pathname: '/login',
//               state: {
//                 from: props.location,
//               },
//             }}
//           />
//     );
  
//   }}
// />
// );
    // <Route
    //   path={path}
    //   render={(props) => {
    //     return isLoggedin ? <Component {...props} /> : <Navigate to="/login" />;
    //   }}    />
    // console.log(isLoggedin );
    console.log("location",privateRouteProps);
    
    // return isLoggedin ? children: <Navigate to={{
    
    //   pathname: '/login',
    //   state: {
    //     from: location,
    //     //history library to refer the history in router dom or convert into functional component, hooks 
    //   },
      <Navigate to="/login" state={location}></Navigate>
      
    // }} />

};

// const Home = () => <div>Home</div>;

function App(props)  {
  console.log('this.props',props);

  const { posts,auth } = props;
  const location = useLocation();
  console.log('location',location);
   useEffect(()=> { props.dispatch(fetchPosts());
        console.log("component props",props); 
      // const token = localStorage.getItem('token');
      const token = getAuthTokenFromLocalStorage();
      if (token) {
        const user = jwt(token);
    
        // console.log('user', user);
        props.dispatch(
          authenticateUser({
            email: user.email,
            _id: user._id,
            name: user.name,
          })
        );
     
   };},[]);

//) {
//     this.props.dispatch(fetchPosts());
//     console.log("component props",this.props); 
//   // const token = localStorage.getItem('token');
//   const token = getAuthTokenFromLocalStorage();
//   if (token) {
//     const user = jwt(token);

//     // console.log('user', user);
//     this.props.dispatch(
//       authenticateUser({
//         email: user.email,
//         _id: user._id,
//         name: user.name,
//       })
//     );
//   }
// }

  
    
    return (
      // <Router>
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
            {/* no need to render props can pass it to element directly as it gets automatically rendered */}
            {/* //something passed to home for that only props is there */}
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
{/*           
          <PrivateRoute
              path="/settings"
              element={<Settings />}
              isLoggedin = {true}
            /> */}
            <Route exact path="/settings" element={ <PrivateRoute isLoggedin = {auth.isLoggedin} path={location.pathName}> <Settings/></PrivateRoute>}/>
            <Route exact path="/user/:userId" element={ <PrivateRoute isLoggedin = {auth.isLoggedin} path={location.pathName}><UserProfile/></PrivateRoute>}/>
            {/* <PrivateRoute
              path="/user/:userId"
              component={UserProfile}
              isLoggedin={auth.isLoggedin}
            /> */}
              <Route element ={<Page404 />} />
        </Routes>

      
       </div>
      
//      </Router>
    );
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
