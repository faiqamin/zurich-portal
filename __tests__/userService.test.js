import { fetchUsers } from '../services/userService';
import axios from 'axios';

jest.mock('axios');

test('fetchUsers retrieves and filters users correctly', async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      data: [
        { first_name: 'Greg', last_name: 'Wall', email: 'greg@example.com' },
      ],
      total_pages: 1,
    },
  });

  const users = await fetchUsers();
  expect(users).toEqual([
    { first_name: 'Greg', last_name: 'Wall', email: 'greg@example.com' },
  ]);
});
