import React from 'react';
import Navigation from '../components/Navigation';
import Logo from "../components/Logo";


const Login = () => {
   
    return (
      <>
      <Navigation/>
      <Logo/>

        <form>
          <h1>Create Account</h1>
    
          <label>
            Email:
            <input
              name="email"
              type="email"
              required />
          </label>
          
          <label>
            Password:
            <input
              name="password"
              type="password"
              required />
          </label>

      <button>Submit</button>
    </form>
    </>
  );
};

export default Login;