import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthenticationContext";
import { AdProvider } from "./contexts/AdContext";

import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { AppendAd } from "./components/MyPage/AppendAd/AppendAd";
import { MyPage } from "./components/MyPage/MyPage";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import {CardDetails} from "./components/CardDetails/CardDetails";

function App() {

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("onRegisterSubmit");
  };
  
  return (
    <AuthProvider>
      <AdProvider>
        <Header />

        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={<Register onRegisterSubmit={onRegisterSubmit} />}
            />
            <Route path="/mypage" element={<MyPage />} />
            <Route
              path="/appendad"
              element={<AppendAd />}
            />
            <Route
              path="/logout"
              element={<Logout />}
            />
            <Route
              path="/details/:adId"
              element={<CardDetails />}
            />
          </Routes>
        </main>

        <Footer />
      </AdProvider>
    </AuthProvider>
  );
}

export default App;
