import React, { Component } from 'react';
//uncontrolled way 
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.emailInputRef = React.createRef();
//     this.passwordInputRef = React.createRef();
//   }

//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('this.emailInputRef', this.emailInputRef);
//     console.log('this.passwordInputRef', this.passwordInputRef);
//   };

//   render() {
//     return (
//       <form className="login-form">
//         <span className="login-signup-header">Log In</span>
//         <div className="field">
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             ref={this.emailInputRef}
//           />
//         </div>
//         <div className="field">
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             ref={this.passwordInputRef}
//           />
//         </div>
//         <div className="field">
//           <button onClick={this.handleFormSubmit}>Log In</button>
//         </div>
//       </form>
//     );
//   }
// }


//controlled way to login

import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

import { login, clearAuthState } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
    console.log('this.state', this.state);
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };

  render() {
    // const navigate = useNavigate();
    const { error, inProgress, isLoggedin } = this.props.auth;
    const { from } = this.props.location || { from: { pathname: '/' } };

    if (isLoggedin) {
      return <Navigate to ={from}/> ;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging in...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);

