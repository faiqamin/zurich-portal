import { getSession, signOut } from 'next-auth/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UsersList from '../components/UsersList';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    // Redirect to the login page if not authenticated
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: { session } };
}

export default function UsersPage({ session }) {
  return (
    <div>
      <Header />
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome, {session.user.name}!</h1>
        <button
          onClick={() => signOut()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#FF0000',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Log out
        </button>
        <UsersList />
      </main>
      <Footer />
    </div>
  );
}
