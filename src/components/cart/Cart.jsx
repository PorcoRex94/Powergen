import { useCartStore } from "../../store/cartStore";

export const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🛒 Tu Carrito</h1>
      {cart.length === 0 && <p>El carrito está vacío</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        >
          <h3>{item.nombre}</h3>
          <p>Precio unitario: ${item.precio}</p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button onClick={() => decreaseQuantity(item.id)}>➖</button>
            <span style={{ minWidth: "30px", textAlign: "center" }}>
              {item.cantidad}
            </span>
            <button onClick={() => increaseQuantity(item.id)}>➕</button>
            <button onClick={() => removeFromCart(item.id)}>🗑 Eliminar</button>
          </div>

          <p>
            Subtotal: <strong>${item.precio * item.cantidad}</strong>
          </p>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2>Total: ${total}</h2>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};
