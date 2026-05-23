import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from refreshing!

    // Simple Validation
    if (!email.includes('@') || password.length < 6) {
      setError('Invalid email or password (min 6 characters)');
      return;
    }

    // "Mock" Login: Save a user token to localStorage
    localStorage.setItem('user-token', '12345');
    alert('Logged in successfully!');
    navigate('/'); // Redirect to Home
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', color: 'white', background: '#222', padding: '30px', borderRadius: '10px' }}>
      <h2>Login to CineTrack</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', background: '#e50914', color: 'white', border: 'none', fontWeight: 'bold' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;