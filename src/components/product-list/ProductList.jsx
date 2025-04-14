import { Grid } from "./product-list-styles";
import { ProductCard } from "../product-card/ProductCard";

export const ProductList = ({ gruposElectrogenos }) => {
  return (
    <Grid>
      {gruposElectrogenos.map((grupo) => (
        <ProductCard key={grupo.id} gruposElectrogenos={grupo} />
      ))}
    </Grid>
  );
};
