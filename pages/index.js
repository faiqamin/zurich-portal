import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to the users page if the user is already authenticated
      router.push('/users');
    }
  }, [session, router]);

  const handleLogin = async () => {
    await signIn('google');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Zurich Portal</h1>
      <p>Please log in to access your account.</p>
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Log in with Google
      </button>
    </div>
  );
}
