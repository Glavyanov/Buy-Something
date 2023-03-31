import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import * as cardsService from './services/cardsServise';

function App() {

    const [ads, setAds] = useState([]);

    useEffect(() => {
        cardsService.getSevenLatest()
        .then(res => setAds(res));

    },[]);

    const onLoginSubmit = (e) => {
        e.preventDefault();
        console.log('onLoginSubmit');
    };

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('onRegisterSubmit');
    }
    
    return (
        <>
            <Header />

            <main id="main">
                <Routes>
                    <Route path='/' element={<Home ads={ads} />} />
                    <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
                    <Route path='/register' element={<Register onRegisterSubmit={onRegisterSubmit}/>} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
