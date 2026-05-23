import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('user-token');
  
  if (!token) {
    // If no token, send them to login
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;