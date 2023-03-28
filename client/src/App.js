import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import * as cardsService from './services/cardsServise';

function App() {

    const [ads, setAds] = useState([]);

    useEffect(() => {
        cardsService.getSevenLatest()
        .then(res => setAds(res));

    },[]);
    
    return (
        <>
            <Header />

            <main id="main">
                <Routes>
                    <Route path='/' element={<Home ads={ads} />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
