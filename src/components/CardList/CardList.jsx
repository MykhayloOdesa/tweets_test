import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card/Card';

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
`;

const ListItem = styled.li`
  width: 380px;
  text-align: center;
  text-transform: uppercase;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export default function CardList({ users }) {
  return (
    <List>
      {users &&
        users.map(({ id, avatar, tweets, followers }) => (
          <ListItem key={id}>
            <Card
              id={id}
              tweets={tweets}
              initialFollowers={followers}
              avatar={avatar}
            />
          </ListItem>
        ))}
    </List>
  );
}
