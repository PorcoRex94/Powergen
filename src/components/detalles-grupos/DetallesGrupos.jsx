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
  DetalleContainer,
  EspecifcTextContainer,
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
  const [productType, setProductType] = useState("standard");

  if (!grupo) return <h1>Producto no encontrado</h1>;

  const handleAgregar = () => {
    addToCart({ ...grupo, cantidad });
  };

  const increase = () => setCantidad((prev) => prev + 1);
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  const galleryImages = grupo.images || [grupo.image];

  const handleProductTypeChange = (e) => {
    const selectedType = e.target.value;
    setProductType(selectedType);
  };

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
          <div className="input__container">
            <input
              type="radio"
              id="standard"
              name="productType"
              value="premium"
              checked={productType === "premium"}
              onChange={handleProductTypeChange}
            />
            <label
              htmlFor="standard"
              style={{
                marginLeft: "0.5rem",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              Opción Premium (Recomendada)
            </label>
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
          </div>
          <div className="input__container">
            <input
              type="radio"
              id="premium"
              name="productType"
              value="standard"
              checked={productType === "standard"}
              onChange={handleProductTypeChange}
            />
            <label
              htmlFor="premium"
              style={{
                marginLeft: "0.5rem",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              Opción Standard
            </label>
            <SpecSimple
              label={`Precio Standard: $${grupo.precioStandard}`}
              value={[
                `Garantía de fábrica de 6 meses.`,
                `Venta a caja cerrada.`,
              ]}
            />
          </div>
        </TextContainer>
        {/* PANEL DE COMPRA */}
      </SliderHeroContainer>
      {/* FICHA TÉCNICA */}
      <DetalleContainer>
        <h2 style={{ marginBottom: "1rem" }}>Ficha Técnica</h2>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[0, 1].map((col) => (
            <div key={col} style={{ flex: 1 }}>
              {grupo.specs
                .slice(col === 0 ? 0 : 7, col === 0 ? 7 : grupo.specs.length)
                .map((spec, index) => (
                  <EspecifcTextContainer key={index}>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        width: "40%",
                      }}
                    >
                      {spec.label}:
                    </div>
                    <div style={{ color: "#555", width: "60%" }}>
                      {spec.value}
                    </div>
                  </EspecifcTextContainer>
                ))}
            </div>
          ))}
        </div>
      </DetalleContainer>
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
    </GlobalContainer>
  );
};

// Mini spec destacada
const SpecSimple = ({ label, value }) => {
  const valores = Array.isArray(value) ? value : [value];
  return (
    <PremStandContainer>
      {valores.map((b, index) => (
        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            color: "#666",
          }}
          key={index}
        >
          <FaRegArrowAltCircleRight
            style={{
              paddingRight: "0.2rem",
              fontSize: "1.5rem",
              position: "relative",
              top: "5px",
            }}
          />
          {b}
        </p>
      ))}
      <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
        {label}
      </p>
    </PremStandContainer>
  );
};
