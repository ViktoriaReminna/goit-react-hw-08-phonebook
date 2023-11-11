import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { useLogOutHook } from '../../hook/PageHooks/LogoutHook';

import { Div, DivHeader, H3, Img, Navigation, Ul1, Ul2 } from './Header.styled';

import contact from '../../img/contact.jpg';

export function Layout() {
  const { handleSubmit, isLogin, getUsername } = useLogOutHook();
  return (
    <DivHeader>
      <Div>
        <Ul1>
          <li>
            <Navigation to="/">Home</Navigation>
          </li>
          <li>{isLogin && <Navigation to="/contacts">Contacts</Navigation>}</li>
        </Ul1>

        <Ul2>
          {isLogin ? (
            <li>
              <H3>
                Hello {getUsername}
                <Img src={contact} alt="contact" width="25" height="25" />
              </H3>
            </li>
          ) : (
            <li>
              <Navigation to="/register">Sing up</Navigation>
            </li>
          )}
          <li onClick={isLogin ? handleSubmit : undefined}>
            <Navigation to="/login">
              {isLogin ? 'Log out' : 'Log in'}
            </Navigation>
          </li>
        </Ul2>
      </Div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DivHeader>
  );
}
