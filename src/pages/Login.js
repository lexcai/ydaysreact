import React from 'react';
import Navigation from '../components/Navigation';
import Logo from "../components/Logo";

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
 
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
 
  return [value, setValue];
};

const Login = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );
  const onChange = event => setValue(event.target.value);

    return (
      <>
      <Navigation/>
      <Logo/>
    <div>
     <h1>Entrez votre nom d'utilisateur</h1>

     <input value={value} type="text" placeholder="Nom d'utilisateur" onChange={onChange} />

   </div>    
   </>
  );
};

export default Login;