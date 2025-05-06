import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { gruposElectrogenos } from "../../data/gruposElectrogenos";
import {
  ButtonCart,
  ButtonInDec,
  ContainerHUno,
  GlobalContainer,
  ImgContainer,
  SliderContainer,
  SliderHeroContainer,
} from "./detalles-grupos-styles";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export const DetallesGrupos = () => {
  const { id } = useParams();
  const grupo = gruposElectrogenos.find((item) => item.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);
  const [cantidad, setCantidad] = useState(1);
  const [mainImage, setMainImage] = useState(grupo?.image);

  if (!grupo) return <h1>Producto no encontrado</h1>;

  const handleAgregar = () => {
    addToCart({ ...grupo, cantidad });
  };

  const increase = () => setCantidad((prev) => prev + 1);
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  const galleryImages = grupo.images || [grupo.image];

  return (
    <GlobalContainer>
      {/* TITULAR + MARCA */}
      <ContainerHUno>
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>{grupo.nombre}</h1>
      </ContainerHUno>
      {/* GALERÍA */}
      <SliderHeroContainer>
        <ImgContainer>
          <img
            src={mainImage}
            alt={grupo.nombre}
            style={{ width: "80%", height: "100%" }}
          />
        </ImgContainer>
        <SliderContainer>
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Vista ${idx + 1}`}
              onClick={() => setMainImage(img)}
              style={{
                width: "110px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
                border:
                  img === mainImage ? "3px solid #007bff" : "1px solid #ccc",
              }}
            />
          ))}
        </SliderContainer>
      </SliderHeroContainer>
      {/* DESTACADO */}
      <div
        style={{
          background: "#f0f4ff",
          padding: "1.5rem",
          borderRadius: "12px",
          marginBottom: "2rem",
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <SpecSimple label="Potencia" value={grupo.potencia} />
        <SpecSimple label="Fase" value={grupo.fase} />
        <SpecSimple label="Combustible" value={grupo.combustible} />
        <SpecSimple label="Precio Premium" value={`$${grupo.precioPremium}`} />
        <SpecSimple
          label="Precio Standard"
          value={`$${grupo.precioStandard}`}
        />
      </div>

      {/* DETALLES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        {/* FICHA TÉCNICA */}
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Especificaciones Técnicas</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {grupo.specs &&
                grupo.specs.map((spec, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                    <td
                      style={{
                        padding: "0.75rem",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {spec.label}
                    </td>
                    <td style={{ padding: "0.75rem", color: "#555" }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* PANEL DE COMPRA */}
        <div
          style={{
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "1.5rem",
            position: "sticky",
            top: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            background: "#fdfdfd",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Desde ${grupo.precioStandard}
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <ButtonInDec onClick={decrease}>
              <CiCircleMinus />
            </ButtonInDec>
            <input
              type="text"
              value={cantidad}
              readOnly
              style={{
                width: "55px",
                height: "40px",
                textAlign: "center",
                fontWeight: "bold",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <ButtonInDec onClick={increase}>
              <CiCirclePlus />
            </ButtonInDec>
          </div>

          <ButtonCart onClick={handleAgregar}>Agregar al carrito</ButtonCart>
        </div>
      </div>
    </GlobalContainer>
  );
};

// Mini spec destacada
const SpecSimple = ({ label, value }) => (
  <div>
    <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>{label}</p>
    <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>{value}</p>
  </div>
);
