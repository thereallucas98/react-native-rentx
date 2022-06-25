import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSvg from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/carDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcons";

import {
  Container,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  Details,
  CarImage,
} from "./styles";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand> {data.brand} </Brand>
        <Name> {data.name} </Name>

        <About>
          <Rent>
            <Period> {`RS ${data.period}`} </Period>
            <Price> {data.price} </Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
