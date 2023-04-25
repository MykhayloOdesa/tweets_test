import React from 'react';
import styled from 'styled-components';

import Navigation from 'components/Navigation/Navigation';

const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: green;
`;

export default function AppBar() {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
}
