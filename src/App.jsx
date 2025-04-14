import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { GruposElectrogenos } from "./components/grupos-electrogenos/GruposElectrogenos";
import { GlobalComponents } from "./components/global-components/GlobalComponents";
import { EnergiasAlternativas } from "./components/energias-alternativas/EnergiasAlternativas";
import { VentasPage } from "./pages/VentasPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GlobalComponents />}>
          <Route index element={<Index />} />
          <Route path="/grupos/*" element={<GruposElectrogenos />} />
          <Route path="/energias" element={<EnergiasAlternativas />} />
          <Route path="/ventas" element={<VentasPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
