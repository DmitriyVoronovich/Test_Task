import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/mainSection/Main";
import {Footer} from "./layout/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {

    const [login, setLogin] = useState(true);

    const closeLoginForm = () => {
        setLogin(false)
    }

    const openLoginForm = () => {
        setLogin(true)
    }

    return (
        <BrowserRouter>
            <div>
                <Header openLoginForm={openLoginForm}/>
                <Routes>
                    <Route path={'/'} element={ <Main login={login}
                                                      closeLoginForm={closeLoginForm}
                                                      openLoginForm={openLoginForm}/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
