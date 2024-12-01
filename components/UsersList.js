import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/userSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [emailVisible, setEmailVisible] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      dispatch(setUsers(data));
    };
    getUsers();
  }, [dispatch]);

  const toggleEmail = (id) => {
    setEmailVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const maskEmail = (email) => email.replace(/(.{2}).+@/, '$1****@');

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>
            Email: {emailVisible[user.id] ? user.email : maskEmail(user.email)}
          </p>
          <button onClick={() => toggleEmail(user.id)}>
            {emailVisible[user.id] ? 'Hide Email' : 'Show Email'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
