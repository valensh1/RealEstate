import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './views/home';

export const UserContext = React.createContext();

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState('');
  const [bodyClick, setBodyClick] = useState('');

  const bodyClickEvent = (event) => {
    if (event.target.id === 'hamburger-hidden-container' && !hamburgerMenu) {
      console.log(event.target.id);
      setHamburgerMenu(true);
    } else if (
      event.target.id === 'hamburger-hidden-container' &&
      hamburgerMenu
    ) {
      setHamburgerMenu(false);
    } else {
      console.log(event.target.id);
      setHamburgerMenu(false);
      setBodyClick(false);
    }
  };

  return (
    <div className="App" onClick={bodyClickEvent}>
      <UserContext.Provider value={{ hamburgerMenu }}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
