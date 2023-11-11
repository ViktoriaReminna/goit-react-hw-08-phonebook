import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Header/Header';
import { Suspense, lazy, useEffect } from 'react';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/seletors';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './PublicRoute';
import authOperations from '../redux/auth/auth_operations';

const Home = lazy(() => import('../pages/Home/Home'));
const PageContacts = lazy(() => import('../pages/Contacts/Contacts'));
const LogIn = lazy(() => import('../pages/Login/Login'));
const SingUp = lazy(() => import('../pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isFetchingCurrentUser ? (
        <h1>...Loading</h1>
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                exact
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PageContacts />
                  </PrivateRoute>
                }
              />

              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <SingUp />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                restricted
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LogIn />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
      <Toaster />
    </div>
  );
}
