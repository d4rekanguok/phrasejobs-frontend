import React from 'react';
import * as Auth from '../../services/auth';
import { Input } from './components/Input';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      error: false,
    }
    
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value,
      })
    }
  }

  submitHandler(e) {
    e.preventDefault();

    const { email, password } = this.state;
    Auth.signIn(email, password)
      .then(console.log);
  }

  render() {
    const emailHandler = this.changeHandler("email");
    const passwordHandler = this.changeHandler("password");

    return (
      <form>
        <Input 
          label="Email"
          type="email"
          value={this.state.email}
          changeHandler={emailHandler} 
        />
        <Input 
          label="Password"
          type="password"
          value={this.state.password}
          changeHandler={passwordHandler}
        />
        <button
          onClick={this.submitHandler}
        >Sign In</button>
      </form>
    )
  }
}

const SignIn = () => (
  <React.Fragment>
    <h1>Enter your PhraseApp credential.</h1>
    <Form />
  </React.Fragment>
);

export {
  SignIn,
}