import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Contacto } from "../contacto/Contacto";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { ScrollToTop } from "../scroll-to-top/ScrollToTop";
import { ChatBot } from "../chat-bot/ChatBot";

export const GlobalComponents = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <ChatBot />
      <Navbar />
      <Outlet />
      <Contacto />
      <Footer />
    </>
  );
};
