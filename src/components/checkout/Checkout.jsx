import { useCartStore } from "../../store/cartStore";
import {
  ContainerProduct,
  GlobalContainer,
  InfoProductContainer,
} from "./checkout-styles";

export const Checkout = () => {
  const { cart } = useCartStore();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

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

      <h2>Total: ${total}</h2>

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
