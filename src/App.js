import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/mainSection/Main";
import {Footer} from "./layout/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import {Event} from "./layout/sections/event/Event";
import {PopUpMessage} from "./layout/sections/popUp/PopUp";

function App() {

    const [login, setLogin] = useState(false);
    const [bid, setBid] = useState({})
    const [popUp, setPopUp] = useState(false)

    const openPopUp = () => {
        setBid(JSON.parse(localStorage.getItem('match')));
        setPopUp(true)
    }

    setTimeout(() => {
        setPopUp(false)
    }, 3000)

    const closeLoginForm = () => {
        setLogin(false)
    };

    const openLoginForm = () => {
        setLogin(true)
    };

    return (
        <BrowserRouter>
            <div>
                {popUp && <PopUpMessage bid={bid}/>}
                <Header openLoginForm={openLoginForm}/>
                <Routes>
                    <Route path={'/'} element={<Main login={login}
                                                     closeLoginForm={closeLoginForm}
                                                     openLoginForm={openLoginForm}/>}/>
                    <Route path={'/:id'} element={<Event openPopUp={openPopUp}/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
