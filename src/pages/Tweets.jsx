import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import styled from 'styled-components';

import { fetchUsers } from 'services/api';

import CardList from 'components/CardList/CardList';
import BackButton from 'components/ButtonBack/ButtonBack';

const Container = styled.div`
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function update() {
      setIsLoading(true);

      try {
        const response = await fetchUsers();
        setUsers(prevUsers => [...prevUsers, ...response.data]);

        setIsLoading(false);
      } catch (error) {
        return Notiflix.Notify.failure('Something went wrong');
      }
    }

    update();
  }, []);

  return (
    <Container>
      <BackButton />

      {isLoading && <p>Loading...</p>}

      <CardList users={users} />
    </Container>
  );
}
