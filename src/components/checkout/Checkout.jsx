import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import {
  ContainerProduct,
  ContainerText,
  GlobalContainer,
  InfoProductContainer,
  InputContainer,
  PremiumStandardContainer,
} from "./checkout-styles";

export const Checkout = () => {
  const { cart } = useCartStore();
  // Estado para el tipo de producto seleccionado (Standard o Premium)
  const [productType, setProductType] = useState("standard");

  // Estado para la descripción de la opción seleccionada
  const [description, setDescription] = useState(
    "Producto estándar, ideal para uso general."
  );

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const adjustedTotal =
    productType === "premium"
      ? total * 1.2 // Aumentar un 20% si es Premium
      : total;

  const paymentMethods = [
    "Tarjeta de Crédito",
    "Tarjeta de Débito",
    "Transferencia Bancaria",
    "MercadoPago",
  ];

  const handleProductTypeChange = (e) => {
    const selectedType = e.target.value;
    setProductType(selectedType);

    // Establecer la descripción según el tipo seleccionado
    if (selectedType === "premium") {
      setDescription(
        "BENEFICIOS PREMIUM: \n 1-Extensión de garantía técnica a un total de 12 meses.\n 2-Reforzado de fábrica o se refuerza en el primer service.\n 3-Pre entrega de puesta en marcha y ensayo de esfuerzo. \n4-Servicio técnico durante la vida útil de su equipo, acceso al 0810 las 24 hs, visitas técnicas.\n Asesoramiento permanente, servicio de post venta full, provisión de repuestos express y más."
      );
    } else {
      setDescription(
        "STANDARD: \n1-Garantía de fábrica de 6 meses \n2-Venta a caja cerrada."
      );
    }
  };

  return (
    <GlobalContainer>
      <h2>Resumen de productos:</h2>
      <ContainerProduct single={cart.length === 1}>
        {cart.map((item) => (
          <InfoProductContainer key={item.id}>
            <img src={item.image} alt={item.nombre} />
            <p>
              {item.nombre} {item.marca} x {item.cantidad} = $
              {item.precio * item.cantidad}
            </p>
          </InfoProductContainer>
        ))}
      </ContainerProduct>
      <PremiumStandardContainer>
        <h2>Selecciona el tipo de producto:</h2>
        <InputContainer>
          <div>
            <input
              type="radio"
              id="standard"
              name="productType"
              value="premium"
              checked={productType === "premium"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="standard" style={{ marginLeft: "0.5rem" }}>
              Opción Premium (Recomendada)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="premium"
              name="productType"
              value="standard"
              checked={productType === "standard"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="premium" style={{ marginLeft: "0.5rem" }}>
              Opción Standard
            </label>
          </div>
        </InputContainer>

        <ContainerText>
          <p
            style={{
              fontSize: "0.9rem",
              color: "gray",
              whiteSpace: "pre-line",
              lineHeight: "2rem",
            }}
          >
            {description}
          </p>
        </ContainerText>
      </PremiumStandardContainer>

      <h2>Total: ${adjustedTotal}</h2>

      <h2>Elegí tu forma de pago:</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {paymentMethods.map((method, idx) => (
          <button key={idx} style={{ padding: "1rem", fontSize: "1rem" }}>
            {method}
          </button>
        ))}
      </div>

      <button
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Confirmar compra
      </button>
    </GlobalContainer>
  );
};
