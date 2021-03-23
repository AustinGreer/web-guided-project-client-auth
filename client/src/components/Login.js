import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    //1. make a request to our server for login
    //2. we need to pass in our credential
    //3. If request is successful, console.log our result
    //4. If request fails show our error
    axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      });
  };

  render() {
    console.log("login state: ",this.state);
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;