import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
    return (
        <>
            <Header />

            <main id="main">
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
