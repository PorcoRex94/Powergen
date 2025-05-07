import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const LogosTrack = styled.div`
  display: flex;
  will-change: transform;
`;

const LogoGroup = styled.div`
  display: flex;
  gap: 50px;
`;

const Logo = styled.img`
  width: 200px;
  height: 150px;
  flex-shrink: 0;
`;

export const LogoSlider = ({ logos }) => {
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const speed = useRef(1); // px/frame
  const position = useRef(0);
  const loopLength = useRef(0);

  useEffect(() => {
    if (!groupRef.current) return;

    loopLength.current = groupRef.current.offsetWidth;

    const animate = () => {
      position.current -= speed.current;

      if (Math.abs(position.current) >= loopLength.current) {
        position.current = 0;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${position.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [logos]);

  useEffect(() => {
    speed.current = isHovering ? 0.2 : 1.8;
  }, [isHovering]);

  return (
    <SliderContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <LogosTrack ref={trackRef}>
        {/* Grupo original */}
        <LogoGroup ref={groupRef}>
          {logos.map((logo, i) => (
            <Logo key={`original-${i}`} src={logo} alt={`Logo ${i + 1}`} />
          ))}
        </LogoGroup>
        {/* Duplicado para el loop */}
        <LogoGroup>
          {logos.map((logo, i) => (
            <Logo key={`copy-${i}`} src={logo} alt={`Logo ${i + 1}`} />
          ))}
        </LogoGroup>
      </LogosTrack>
    </SliderContainer>
  );
};
