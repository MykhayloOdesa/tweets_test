import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  margin: 20px auto;
  padding: 8px 16px;

  font-weight: 600;
  border-radius: 10px;
  border: none;

  background-color: green;
  color: blue;
  transition: transform 250ms linear;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: yellow;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 16px;
`;

export default function BackButton() {
  const location = useLocation();

  return (
    <ButtonWrapper type="button">
      <LinkBack to={location.state?.from ?? '/'}>To Home</LinkBack>
    </ButtonWrapper>
  );
}
