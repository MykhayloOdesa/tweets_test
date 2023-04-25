import React from 'react';
import styled from 'styled-components';

import ButtonToTweets from 'components/ButtonToTweets/ButtonToTweets';

const HomeWrapper = styled.div`
  padding: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HomeTitle = styled.h1`
  margin: 10px auto;
  padding: 30px;

  color: blue;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <HomeTitle>Welcome to TWEETS!</HomeTitle>

      <ButtonToTweets />
    </HomeWrapper>
  );
}
