import {
  Card,
  ContainerTextFlex,
  Content,
  Image,
  ImageWrapper,
  Text,
  TextContainer,
  Title,
} from "./product-card-styles";

export const ProductCard = ({ gruposElectrogenos }) => {
  return (
    /*
    <Card>
      <ImageWrapper>
        <Image src={gruposElectrogenos.image} alt={gruposElectrogenos.nombre} />
      </ImageWrapper>
      <Content>
        <Title>{gruposElectrogenos.nombre}</Title>
        <TextContainer>
          <Text>Marca: {gruposElectrogenos.marca}</Text>
          <Text>Combustible: {gruposElectrogenos.combustible}</Text>
          <Text>Potencia: {gruposElectrogenos.potencia}</Text>
          <Text>Fase: {gruposElectrogenos.fase}</Text>
        </TextContainer>
      </Content>
    </Card>
    */
    <Card>
      <ImageWrapper>
        <Image src={gruposElectrogenos.image} alt={gruposElectrogenos.nombre} />
      </ImageWrapper>
      <Content>
        <Title>{gruposElectrogenos.nombre}</Title>
        <TextContainer>
          <ContainerTextFlex>
            <Text>Fase: {gruposElectrogenos.fase}</Text>
            <Text>Marca: {gruposElectrogenos.marca}</Text>
          </ContainerTextFlex>
          <ContainerTextFlex>
            <Text>Potencia: {gruposElectrogenos.potencia}</Text>
            <Text>Combustible: {gruposElectrogenos.combustible}</Text>
          </ContainerTextFlex>
        </TextContainer>
      </Content>
    </Card>
  );
};
