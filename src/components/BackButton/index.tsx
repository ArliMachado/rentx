import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';
import theme from '../../styles/theme';

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({
  color = theme.colors.text,
  ...rest
}: BackButtonProps) {
  return (
    <Container {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={color} />
    </Container>
  );
}
