import { useState, useMemo } from "react";

export const useProductFilters = (gruposElectrogenos) => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [combustion, setCombustion] = useState([]);
  const [phases, setPhases] = useState([]);

  const filtered = useMemo(() => {
    return gruposElectrogenos.filter((p) => {
      if (search) {
        const normalize = (str) =>
          str
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/(\d)\s+([a-z]+)/g, "$1$2");

        const searchWords = normalize(search).split(/\s+/);
        const productText = normalize(
          `${p.nombre} ${p.marca} ${p.combustible} ${p.potencia} ${p.fase}`
        );

        const productWords = productText.split(/\s+/);

        const matchesAllWords = searchWords.every((word) => {
          if (/^\d/.test(word)) {
            return productWords.some((w) => w.startsWith(word));
          }
          return productText.includes(word);
        });

        if (!matchesAllWords) return false;
      }

      if (brand && p.marca !== brand) return false;
      if (combustion.length && !combustion.includes(p.combustible))
        return false;
      if (
        phases.length &&
        !phases.some((fase) =>
          p.fase?.toLowerCase().includes(fase.toLowerCase())
        )
      )
        return false;
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
