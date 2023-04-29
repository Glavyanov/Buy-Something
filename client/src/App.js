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
import { Catalog } from "./components/Catalog/Catalog";
import { CardEdit } from "./components/CardEdit/CardEdit";
import { NotFound } from "./components/NotFound/NotFound";

function App() {

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
              element={<Register />}
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
              path="/details/:cardId/*"
              element={<CardDetails />}
            />
            <Route
              path="/catalog"
              element={<Catalog />}
            />
            <Route
              path="/edit"
              element={<CardEdit />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>

        <Footer />
      </AdProvider>
    </AuthProvider>
  );
}

export default App;
