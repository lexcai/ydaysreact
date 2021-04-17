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


const Profile = () => {
    const [value, setValue] = useStateWithLocalStorage(
        'myValueInLocalStorage'
      );
     
    return (
        <>
       <Navigation/>
        <Logo/>
        <p>Bienvenue {value} sur votre profil !</p>
        </>
        
    )
};

export default Profile;