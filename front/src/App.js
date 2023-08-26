import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Header from "./components/layout/Header";
import Navigator from "./components/layout/Navigator";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import GaleriaPage from "./pages/GaleriaPage";
import NovedadesPage from "./pages/NovedadesPage";
import NosotrosPage from "./pages/NosotrosPage";
import ContactosPage from "./pages/ContactosPage";


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="contactos" element={<ContactosPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;

