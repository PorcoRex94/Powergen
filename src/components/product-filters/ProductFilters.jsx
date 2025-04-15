import {
  CheckboxGroup,
  CheckboxLabel,
  Input,
  Label,
  Select,
  Sidebar,
} from "./product-filters-styles";

export const ProductFilters = ({
  brands,
  onSearch,
  onBrandChange,
  onCombustionChange,
  onPhaseChange,
}) => {
  return (
    <Sidebar>
      <Label>Buscar producto:</Label>
      <Input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Ej: Logus 125 Br..."
      />

      <Label>Marca:</Label>
      <Select onChange={(e) => onBrandChange(e.target.value)}>
        <option value="">Todas</option>
        {brands.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </Select>

      <Label>Combustible:</Label>
      <CheckboxGroup>
        {["Gas", "Nafta", "Diesel"].map((type, index) => (
          <CheckboxLabel key={`combustible-${index}-${type}`}>
            <input type="checkbox" value={type} onChange={onCombustionChange} />{" "}
            {type}
          </CheckboxLabel>
        ))}
      </CheckboxGroup>

      <Label>Fases:</Label>
      <CheckboxGroup>
        {["Monofásico", "Trifásico", "Monofásico/Trifásico"].map(
          (type, index) => (
            <CheckboxLabel key={`fase-${index}-${type}`}>
              <input type="checkbox" value={type} onChange={onPhaseChange} />{" "}
              {type}
            </CheckboxLabel>
          )
        )}
      </CheckboxGroup>
    </Sidebar>
  );
};
