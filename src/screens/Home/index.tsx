import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { Container, Header, HeaderContent, TotalCars } from './styles';

export function Home() {
  const carOne = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png',
  };

  const carTwo = {
    brand: 'porche',
    name: 'Panamera',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://catalogo.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_3474681900348621.png?s=fill&w=236&h=135&q=70&t=true',
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carOne} />
      <Car data={carTwo} />
    </Container>
  );
}
