import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

export default function NotFound() {
  return (
    <HomeWrapper>
      <p>Sorry, we have nothing to display for you...</p>
    </HomeWrapper>
  );
}
