import { useNavigate } from "react-router-dom";
import {
  Card,
  ImageWrapper,
  Image,
  Content,
  Title,
  TextContainer,
  ContainerTextFlex,
  Text,
} from "./product-card-styles.js";
import { useCartStore } from "../../store/cartStore.js";
import { useState } from "react";

export const ProductCard = ({ gruposElectrogenos }) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  const increase = () => setCantidad((prev) => prev + 1);
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    addToCart({ ...grupo, cantidad });
  };

  const handleCardClick = () => {
    const slugifiedName = gruposElectrogenos.nombre
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    navigate(`/equipos/${slugifiedName}/${gruposElectrogenos.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <ImageWrapper>
        <Image src={gruposElectrogenos.image} alt={gruposElectrogenos.nombre} />
      </ImageWrapper>
      <Content>
        <Title>{gruposElectrogenos.nombre}</Title>
        <TextContainer>
          <ContainerTextFlex>
            <Text>Fase: {gruposElectrogenos.fase}</Text>
            <Text>Marca: {gruposElectrogenos.marca}</Text>
          </ContainerTextFlex>
          <ContainerTextFlex>
            <Text>Potencia: {gruposElectrogenos.potencia}</Text>
            <Text>Combustible: {gruposElectrogenos.combustible}</Text>
          </ContainerTextFlex>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                margin: "1rem 0",
              }}
            >
              <button onClick={decrease}>➖</button>
              <input
                type="text"
                readOnly
                value={cantidad}
                style={{
                  width: "40px",
                  textAlign: "center",
                  fontWeight: "bold",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <button onClick={increase}>➕</button>
            </div>

            <button
              onClick={handleAgregar}
              style={{
                padding: "0.5rem 1rem",
                fontWeight: "bold",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </TextContainer>
      </Content>
    </Card>
  );
};
