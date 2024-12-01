import axios from 'axios';

export const fetchUsers = async () => {
  let users = [];
  let page = 1;
  let response;

  do {
    response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    users = [...users, ...response.data.data];
    page++;
  } while (response.data.total_pages >= page);

  return users.filter(
    (user) => user.first_name.startsWith('G') || user.last_name.startsWith('W')
  );
};
