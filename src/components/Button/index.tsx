import React from 'react';
import theme from '../../styles/theme';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <Container {...rest} color={color || theme.colors.main}>
      <Title>{title}</Title>
    </Container>
  );
}
