import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './views/home';

export const UserContext = React.createContext();

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState({
    hamburger: false,
    bodyWasClicked: false,
  });

  const bodyClickEvent = (event) => {
    if (
      event.target.id === 'hamburger-hidden-container' &&
      !hamburgerMenu.hamburger
    ) {
      console.log(event.target.id);
      console.log(`Hamburger menu was clicked; Open hamburger menu`);
      setHamburgerMenu({
        hamburger: true,
        bodyWasClicked: false,
      });
    } else if (
      event.target.id === 'hamburger-hidden-container' &&
      hamburgerMenu.hamburger
    ) {
      console.log(event.target.id);
      console.log(
        `Hamburger menu was clicked when hamburger open; Close hamburger menu`
      );
      setHamburgerMenu({
        hamburger: false,
        bodyWasClicked: false,
      });
    } else {
      console.log(event.target.id);
      console.log(`Body was clicked; Hamburger menu should be CLOSED!!!`);
      setHamburgerMenu({
        hamburger: false,
        bodyWasClicked: false,
      });
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
