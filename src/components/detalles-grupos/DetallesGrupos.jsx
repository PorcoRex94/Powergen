import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { gruposElectrogenos } from "../../data/gruposElectrogenos";
import {
  ButtonCart,
  ButtonInDec,
  ButtonInDecContainer,
  CarritoContainer,
  ContainerHUno,
  GlobalContainer,
  ImgContainer,
  PremStandContainer,
  SliderContainer,
  SliderHeroContainer,
  TextContainer,
} from "./detalles-grupos-styles";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

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
        <ImgContainer>
          <img
            src={mainImage}
            alt={grupo.nombre}
            style={{ width: "80%", height: "100%" }}
          />
        </ImgContainer>
        <TextContainer>
          <SpecSimple
            label={`Precio Premium: $${grupo.precioPremium}`}
            value={[
              `Extensión de garantía técnica a un total de 12 meses.`,
              `Reforzado de fábrica o se refuerza en el primer service.`,
              `Pre entrega de puesta en marcha y ensayo de esfuerzo.`,
              `Servicio técnico durante la vida útil de su equipo, acceso al 0810 las 24 hs, visitas técnicas.`,
              `Asesoramiento permanente, servicio de post venta full, provisión de repuestos express y más.`,
            ]}
          />
          <SpecSimple
            label={`Precio Standard: $${grupo.precioStandard}`}
            value={[`Garantía de fábrica de 6 meses.`, `Venta a caja cerrada.`]}
          />
          {/* PANEL DE COMPRA */}
          <CarritoContainer>
            <ButtonInDecContainer>
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
            </ButtonInDecContainer>

            <ButtonCart onClick={handleAgregar}>Agregar al carrito</ButtonCart>
          </CarritoContainer>
        </TextContainer>
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
      </div>
    </GlobalContainer>
  );
};

// Mini spec destacada
const SpecSimple = ({ label, value }) => {
  const valores = Array.isArray(value) ? value : [value];
  return (
    <PremStandContainer>
      <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
        {label}
      </p>
      {valores.map((b, index) => (
        <p style={{ margin: 0, fontSize: "1rem", color: "#666" }} key={index}>
          <FaRegArrowAltCircleRight />
          {b}
        </p>
      ))}
    </PremStandContainer>
  );
};
