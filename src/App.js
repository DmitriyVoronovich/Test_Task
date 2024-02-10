import { Header } from './layout/header/Header';
import { Main } from './layout/sections/mainSection/Main';
import { Footer } from './layout/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Event } from './layout/sections/event/Event';

const EMPTY_USER = { name: '', password: '' };

const POPUP_TIMEOUT = 4000;

function App() {
  const [login, setLogin] = useState(false);
  const [bid, setBid] = useState({});
  const [popUp, setPopUp] = useState(false);
  const [userName, setUserName] = useState(EMPTY_USER);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserName(user);
    }
  }, []);

  const openPopUp = () => {
    setBid(JSON.parse(localStorage.getItem('match')));
    setPopUp(true);
  };

  setTimeout(() => setPopUp(false), POPUP_TIMEOUT);

  const closeLoginForm = () => {
    setLogin(false);
    setUserName(JSON.parse(localStorage.getItem('user')));
  };

  const removeUser = () => {
    localStorage.removeItem('user');
    setUserName(EMPTY_USER);
  };

  const openLoginForm = () => setLogin(true);

  return (
    <BrowserRouter>
      <div>
        <Header openLoginForm={openLoginForm} userName={userName} removeUser={removeUser} />
        <Routes>
          <Route
            path={'/'}
            element={
              <Main
                login={login}
                closeLoginForm={closeLoginForm}
                openLoginForm={openLoginForm}
                popUp={popUp}
                bid={bid}
              />
            }
          />
          <Route path={'/:id'} element={<Event openPopUp={openPopUp} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
