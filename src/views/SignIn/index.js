import React from 'react';
import * as Auth from '../../services/auth';
import { Input } from './components/Input';
import Link from 'react-router-dom/Link';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: '',
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

    const { username, password } = this.state;
    Auth.signIn(username, password);
  }

  render() {
    const usernameHandler = this.changeHandler("username");
    const passwordHandler = this.changeHandler("password");

    return (
      <form>
        <Input 
          label="Username"
          type="text"
          value={this.state.username}
          changeHandler={usernameHandler} 
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

const SignInForm = () => (
  <div>
    <h1>Enter your PhraseApp credential.</h1>
    <Form />
  </div>
)

const SignedIn = () => (
  <div>
    <h2>You've already signed in</h2>
    <Link to='/'>Go to dashboard</Link> | <Link to='/'>Sign out</Link>
  </div>
)

const SignIn = () => {
  return Auth.isAuthorized()
    ? <SignedIn />
    : <SignInForm />
};

export {
  SignIn,
}