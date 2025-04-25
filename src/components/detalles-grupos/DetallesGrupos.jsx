import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { gruposElectrogenos } from "../../data/gruposElectrogenos";
import { useState } from "react";

export const DetallesGrupos = () => {
  const { id } = useParams();
  const grupo = gruposElectrogenos.find((item) => item.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);
  const [cantidad, setCantidad] = useState(1);

  if (!grupo) return <h1>Producto no encontrado</h1>;

  const handleAgregar = () => {
    addToCart({ ...grupo, cantidad });
    // 👉 opcional: mostrar side cart después
  };

  const increase = () => setCantidad((prev) => prev + 1);
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{grupo.nombre}</h1>
      <img src={grupo.image} alt={grupo.nombre} style={{ maxWidth: "400px" }} />
      <p>Marca: {grupo.marca}</p>
      <p>Potencia: {grupo.potencia}</p>
      <p>Fase: {grupo.fase}</p>
      <p>Combustible: {grupo.combustible}</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "1rem 0",
        }}
      >
        <button onClick={decrease}>➖</button>
        <input
          type="text"
          readOnly
          value={cantidad}
          style={{
            width: "40px",
            textAlign: "center",
            fontWeight: "bold",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button onClick={increase}>➕</button>
      </div>

      <button
        onClick={handleAgregar}
        style={{
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
