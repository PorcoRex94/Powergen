import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Contacto } from "../contacto/Contacto";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

export const GlobalComponents = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Contacto />
      <Footer />
    </>
  );
};
