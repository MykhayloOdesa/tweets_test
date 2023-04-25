import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonWrapper } from 'components/ButtonBack/ButtonBack';

const LinkForward = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 16px;
`;

export default function ButtonToTweets() {
  const location = useLocation();

  return (
    <ButtonWrapper type="button">
      <LinkForward to={location.state?.from ?? '/tweets'}>
        To Tweets
      </LinkForward>
    </ButtonWrapper>
  );
}
