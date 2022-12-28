import React, { useState } from 'react';
import './App.css';
import Home from './views/home';

export const UserContext = React.createContext();

function App() {
  const [bodyClick, setBodyClick] = useState(false);

  const bodyClickEvent = (event) => {
    console.log('You clicked on the body');
    if (event.target.id !== 'hamburger-hidden-container') {
      setBodyClick(!bodyClick);
    }
    console.log(event.target.id);
    console.log(bodyClick);
    console.log(bodyClick);
  };

  return (
    <div className="App" onClick={bodyClickEvent}>
      <UserContext.Provider value={{ bodyClick, setBodyClick }}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
