import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './views/home';

export const UserContext = React.createContext();

function App() {
  const [bodyClick, setBodyClick] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  // const bodyClickEvent = (event) => {
  //   console.log('You clicked on the body');
  //   if (event.target.id !== 'hamburger-hidden-container') {
  //     setBodyClick(!bodyClick);
  //   }
  //   console.log(event.target.id);
  //   console.log(bodyClick);
  // };

  const checkHamburgerOpen = (status) => {
    console.log(status);
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  const bodyClickEvent = (event) => {
    if (event.target.id !== 'hamburger-hidden-container' && hamburgerMenuOpen) {
      setBodyClick(true);
    }
    console.log(event.target.id);
    console.log(bodyClick);
  };

  return (
    <div className="App" onClick={bodyClickEvent}>
      <UserContext.Provider
        value={{ bodyClick, setHamburgerMenuOpen, checkHamburgerOpen }}
      >
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
