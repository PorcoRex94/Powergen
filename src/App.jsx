import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { GruposElectrogenos } from "./components/grupos-electrogenos/GruposElectrogenos";
import { GlobalComponents } from "./components/global-components/GlobalComponents";
import { EnergiasAlternativas } from "./components/energias-alternativas/EnergiasAlternativas";
import { VentasPage } from "./pages/VentasPage";
import { DetallesGrupos } from "./components/detalles-grupos/DetallesGrupos";
import { Cart } from "./components/cart/Cart";
import { CartDrawer } from "./components/cart-drawer/CartDrawer";
import { Checkout } from "./components/checkout/Checkout";
import { AlquilerPage } from "./pages/AlquilerPage";
import { ServTecPage } from "./pages/ServTecPage";
import { AutoelevadoresPage } from "./pages/AutoelevadoresPage";
import { MotoimplementosPage } from "./pages/MotoimplementosPage";

function App() {
  return (
    <>
      <CartDrawer />
      <Routes>
        <Route path="/" element={<GlobalComponents />}>
          <Route index element={<Index />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/grupos/*" element={<GruposElectrogenos />} />
          <Route path="/energias" element={<EnergiasAlternativas />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route path="/alquiler" element={<AlquilerPage />} />
          <Route path="/servicio-tecnico" element={<ServTecPage />} />
          <Route path="/autoelevadores" element={<AutoelevadoresPage />} />
          <Route path="/motoimplementos" element={<MotoimplementosPage />} />
          <Route path="/equipos/:slug/:id" element={<DetallesGrupos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
