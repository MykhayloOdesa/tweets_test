import axios from 'axios';
import Notiflix from 'notiflix';

const agent = axios.create({
  baseURL: 'https://64466a2e0431e885f0114f85.mockapi.io/users',
});

export const fetchUsers = async () => {
  try {
    const response = await agent.get();

    return response;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, nothing to display for your request: ',
      error.message
    );
  }
};
