import React, { useState } from 'react';
import './App.css';
import Home from './views/home';

// Creation of React Context to be exported to Child Components
export const UserContext = React.createContext();

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const bodyClickEvent = (event) => {
    if (event.target.id === 'hamburger-hidden-container' && !hamburgerMenu) {
      console.log(`Hamburger menu was clicked; Open hamburger menu`);
      setHamburgerMenu(true);
    } else {
      console.log(
        `Either body was clicked or hamburger menu was clicked while its open; Hamburger menu should be CLOSED!!!`
      );
      setHamburgerMenu(false);
    }
  };

  return (
    <div className="App" onClick={bodyClickEvent}>
      {/* Wrap UserContext.Provider Component around whichever Child Components context will be passed down to. MUST BE VALUE VARIABLE NAME USED OTHERWISE IT WON'T WORK!!!! */}
      <UserContext.Provider value={{ hamburgerMenu }}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
