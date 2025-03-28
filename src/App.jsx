import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Index } from "./pages/Index";
import { Footer } from "./components/footer/Footer";
import { Contacto } from "./components/contacto/Contacto";
import { ServiciosDos } from "./components/servicios/ServiciosDos";
import { Servicios } from "./components/servicios/Servicios";
import { Nosotros } from "./components/nosotros/Nosotros";
import { Slider } from "./components/slider/Slider";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Nosotros />
      <Servicios />
      <Slider />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
