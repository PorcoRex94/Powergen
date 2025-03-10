import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Index } from "./pages/Index";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
