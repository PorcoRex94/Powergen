import { useState, useMemo } from "react";

export const useProductFilters = (gruposElectrogenos) => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [combustion, setCombustion] = useState([]);
  const [phases, setPhases] = useState([]);

  const filtered = useMemo(() => {
    const normalize = (str) =>
      str
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/(\d)\s+([a-z]+)/g, "$1$2") // 10 kva -> 10kva
        .replace(/[^a-z0-9.\s]/g, ""); // remueve todo lo que no sea letra, número, punto, espacio

    const tokenize = (str) => normalize(str).split(/\s+/).filter(Boolean);

    return gruposElectrogenos.filter((p) => {
      const productTokens = tokenize(
        `${p.nombre} ${p.marca} ${p.combustible} ${p.potencia} ${p.fase}`
      );

      // FILTRO DE BUSQUEDA (por texto libre)
      if (search) {
        const searchTokens = tokenize(search);

        const matchesAllSearchWords = searchTokens.every((searchWord) => {
          return productTokens.some((token) => token.includes(searchWord));
        });

        if (!matchesAllSearchWords) return false;
      }

      // FILTRO POR MARCA (select)
      if (brand && normalize(p.marca) !== normalize(brand)) {
        return false;
      }

      // FILTRO POR COMBUSTIBLE (select)
      if (combustion.length && !combustion.includes(p.combustible)) {
        return false;
      }

      // FILTRO POR FASE (select)
      if (
        phases.length &&
        !phases.some((fase) => normalize(p.fase).includes(normalize(fase)))
      ) {
        return false;
      }

      return true;
    });
  }, [gruposElectrogenos, search, brand, combustion, phases]);

  return {
    filtered,
    search,
    setSearch,
    brand,
    setBrand,
    combustion,
    setCombustion,
    phases,
    setPhases,
  };
};
