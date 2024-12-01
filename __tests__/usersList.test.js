import { render, screen, fireEvent } from '@testing-library/react';
import UsersList from '../components/UsersList';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('renders users and toggles email visibility', () => {
  render(
    <Provider store={store}>
      <UsersList />
    </Provider>
  );

  const toggleButton = screen.getByText(/Show Email/i);
  fireEvent.click(toggleButton);

  expect(screen.getByText(/Hide Email/i)).toBeInTheDocument();
});
