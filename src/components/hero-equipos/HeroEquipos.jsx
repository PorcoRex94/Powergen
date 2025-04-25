import { HeroContainer } from "./hero-equipos-styles.js";
import { useEffect, useState } from "react";

export const HeroEquipos = ({ backgroundImage, altText = "Hero Imágen" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <HeroContainer className={`hero ${!isMobile ? "with-background" : ""}`}>
      {/* Solo mostramos la imagen en mobile */}
      {isMobile && (
        <img
          className="img__heros"
          src="/assets/imgs/img/pwrgen-hero.png"
          alt={altText}
          width="100vw"
          height="60vh"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
          fetchPriority="high"
          decoding="async"
        />
      )}
      <div className="hero__content"></div>
    </HeroContainer>
  );
};
