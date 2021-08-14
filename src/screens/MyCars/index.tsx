import { useTheme } from 'styled-components';
import { StatusBar, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointment,
  AppointmentsTitle,
  AppointmentQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} onPress={handleBack} />

        <Title>
          Seus agendamentos,{'\n'}
          estão aqui.
        </Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointment>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentQuantity>{cars.length}</AppointmentQuantity>
          </Appointment>

          <FlatList
            data={cars}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />

                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>

                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />

                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
