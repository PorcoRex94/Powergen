import "./cart-drawer.css";
import { useCartStore } from "../../store/cartStore";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  ButtonCart,
  ButtonInDec,
} from "../detalles-grupos/detalles-grupos-styles";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="btn__carrito__container">
          <h2 className="hache__dos">🛒 Carrito</h2>
          <a onClick={closeCart} className="btn">
            <IoIosCloseCircleOutline className="btn__top" />
          </a>
        </div>
        <div className="cart-products">
          {cart.length === 0 && <p>El carrito está vacío</p>}
          {cart.map((item) => (
            <div
              key={item.id}
              style={{ marginBottom: "1.5rem" }}
              className="global__container"
            >
              <div className="top__container">
                <img
                  src={item.image}
                  alt={item.nombre}
                  className="grupo__img"
                />
                <h4>{item.nombre + " " + item.marca}</h4>
              </div>
              <div className="bottom__container">
                <p>Precio: ${item.precio}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <ButtonInDec onClick={() => decreaseQuantity(item.id)}>
                    <CiCircleMinus />
                  </ButtonInDec>
                  <span>{item.cantidad}</span>
                  <ButtonInDec onClick={() => increaseQuantity(item.id)}>
                    <CiCirclePlus />
                  </ButtonInDec>
                  <button onClick={() => removeFromCart(item.id)}>
                    <FaRegTrashCan />
                  </button>
                </div>
                <p>Subtotal: ${item.precio * item.cantidad}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <h3>Total: ${total}</h3>
          {cart.length > 0 && (
            <>
              <button onClick={clearCart} className="btn">
                Vaciar carrito
              </button>
            </>
          )}

          {cart.length >= 1 && (
            <ButtonCart onClick={handleCheckout}>Finalizar Compra</ButtonCart>
          )}
        </div>
      </div>
    </>
  );
};
