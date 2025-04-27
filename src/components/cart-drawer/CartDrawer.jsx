import "./cart-drawer.css";
import { useCartStore } from "../../store/cartStore";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import {
  ButtonCart,
  ButtonInDec,
} from "../detalles-grupos/detalles-grupos-styles";

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

  const handleAgregar = () => {
    addToCart({ ...grupo, cantidad });
    // 👉 opcional: mostrar side cart después
  };

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <h2 className="hache__dos">🛒 Carrito</h2>
        {cart.length === 0 && <p>El carrito está vacío</p>}
        {cart.map((item) => (
          <div
            key={item.id}
            style={{ marginBottom: "1.5rem" }}
            className="global__container"
          >
            <img src={item.image} alt={item.nombre} className="grupo__img" />
            <h4>{item.nombre}</h4>
            <p>Precio: ${item.precio}</p>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <ButtonInDec onClick={() => decreaseQuantity(item.id)}>
                <CiCircleMinus />
              </ButtonInDec>
              <span>{item.cantidad}</span>
              <ButtonInDec onClick={() => increaseQuantity(item.id)}>
                <CiCirclePlus />
              </ButtonInDec>
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

        <ButtonCart onClick={handleAgregar}>Agregar al carrito</ButtonCart>
      </div>
    </>
  );
};
