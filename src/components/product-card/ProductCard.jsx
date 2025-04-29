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
  ContainerGlobalTextFlex,
} from "./product-card-styles.js";
import { useCartStore } from "../../store/cartStore.js";
import { useState } from "react";
import { ButtonInDec } from "../detalles-grupos/detalles-grupos-styles.js";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export const ProductCard = ({ gruposElectrogenos }) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  const increase = () => setCantidad((prev) => prev + 1);
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    addToCart({ ...gruposElectrogenos, cantidad });
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
          <ContainerGlobalTextFlex>
            <ContainerTextFlex>
              <Text>Fase: {gruposElectrogenos.fase}</Text>
              <Text>Marca: {gruposElectrogenos.marca}</Text>
            </ContainerTextFlex>
            <ContainerTextFlex>
              <Text>Potencia: {gruposElectrogenos.potencia}</Text>
              <Text>Combustible: {gruposElectrogenos.combustible}</Text>
            </ContainerTextFlex>
            <ContainerTextFlex>
              <Text>Precio: ${gruposElectrogenos.precio} </Text>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAgregar();
                }}
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
            </ContainerTextFlex>
          </ContainerGlobalTextFlex>
        </TextContainer>
      </Content>
    </Card>
  );
};
