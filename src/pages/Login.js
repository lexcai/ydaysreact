import React from 'react';
import Navigation from '../components/Navigation';


const Login = () => {
   
    return (
      <>
      <Navigation/>
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