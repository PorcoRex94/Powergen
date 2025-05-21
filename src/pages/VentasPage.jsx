import styled from "styled-components";
import { gruposElectrogenos } from "../data/gruposElectrogenos";
import { ProductList } from "../components/product-list/ProductList";
import { useProductFilters } from "../hooks/useProductFilters";
import { ProductFilters } from "../components/product-filters/ProductFilters";
import { Hero } from "../components/hero/Hero";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const VentasPage = () => {
  const {
    filtered,
    setSearch,
    setBrand,
    combustion,
    setCombustion,
    phases,
    setPhases,
  } = useProductFilters(gruposElectrogenos);

  const brands = [...new Set(gruposElectrogenos.map((p) => p.marca))];

  const handleCombustionChange = (e) => {
    const value = e.target.value;
    setCombustion((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };
  const handlePhaseChange = (e) => {
    const value = e.target.value;
    setPhases((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((p) => p !== value)
    );
  };

  return (
    <main>
      <Hero
        title={"Venta de Grupos Electrógenos"}
        backgroundImage={"/assets/imgs/img/foto_portada_venta.webp"}
      />
      <Container>
        <ProductFilters
          brands={brands}
          onSearch={setSearch}
          onBrandChange={setBrand}
          onCombustionChange={handleCombustionChange}
          onPhaseChange={handlePhaseChange}
        />
        <ProductList gruposElectrogenos={filtered} />
      </Container>
    </main>
  );
};
