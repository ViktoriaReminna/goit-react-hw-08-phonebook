import authSelectors from '../redux/auth/seletors';

import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <div>{isLoggedIn ? children : <Navigate to="/" />}</div>;
}
