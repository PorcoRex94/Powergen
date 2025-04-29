import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import {
  ContainerProduct,
  GlobalContainer,
  InfoProductContainer,
  InputContainer,
  PremiumStandardContainer,
} from "./checkout-styles";

export const Checkout = () => {
  const { cart } = useCartStore();
  const [productType, setProductType] = useState("standard");

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
          <label>
            <input
              type="radio"
              name="productType"
              value="standard"
              checked={productType === "standard"}
              onChange={() => setProductType("standard")}
            />
            Producto Standard
          </label>
          <label>
            <input
              type="radio"
              name="productType"
              value="premium"
              checked={productType === "premium"}
              onChange={() => setProductType("premium")}
            />
            Producto Premium (+20%)
          </label>
        </InputContainer>
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
