import "./cart-drawer.css";
import { useCartStore } from "../../store/cartStore";

export const CartDrawer = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    isCartOpen,
    closeCart,
  } = useCartStore();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <h2 className="hache__dos">🛒 Carrito</h2>
        {cart.length === 0 && <p>El carrito está vacío</p>}
        {cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "1.5rem" }}>
            <h4>{item.nombre}</h4>
            <p>Precio: ${item.precio}</p>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <button onClick={() => decreaseQuantity(item.id)}>➖</button>
              <span>{item.cantidad}</span>
              <button onClick={() => increaseQuantity(item.id)}>➕</button>
              <button onClick={() => removeFromCart(item.id)}>🗑</button>
            </div>
            <p>Subtotal: ${item.precio * item.cantidad}</p>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <h3>Total: ${total}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
          </>
        )}

        <button onClick={closeCart} style={{ marginTop: "1rem" }}>
          Cerrar
        </button>
      </div>
    </>
  );
};
