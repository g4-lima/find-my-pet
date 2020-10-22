import React from 'react';

import { Container } from './styles';

const Input: React.FC = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
