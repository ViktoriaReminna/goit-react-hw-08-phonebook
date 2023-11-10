// import UserMenu from 'components/UserMenu/UserMenu';
// import { NavLink } from 'react-router-dom';
// import { Box } from '../Box';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/selectors';
// import style from './Header.module.css';

// export const Header = () => {
//   const activeClassName = ({ isActive }) =>
//     isActive ? `${style.active}` : `${style.navLink}`;
//   const isLoggedIn = useSelector(getIsLoggedIn);

//   return (
//     <header className={style.header}>
//       <Box>
//         <div className={style.box}>
//           <nav className={style.nav}>
//             <ul className={style.page}>
//               <li>
//                 <NavLink className={activeClassName} end to="/">
//                   Home
//                 </NavLink>
//               </li>
//               {isLoggedIn && (
//                 <li>
//                   <NavLink className={activeClassName} to="/contacts">
//                     Contacts
//                   </NavLink>
//                 </li>
//               )}
//             </ul>
//             {isLoggedIn ? (
//               <UserMenu />
//             ) : (
//               <ul className={style.log}>
//                 <li>
//                   <NavLink to="/registration" className={activeClassName}>
//                     Register
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/login" className={activeClassName}>
//                     Login
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </nav>
//         </div>
//       </Box>
//     </header>
//   );
// };
import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { Box } from '../Box';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import style from './Header.module.css';

export const Header = () => {
  const activeClassName = ({ isActive }) =>
    isActive ? `${style.active}` : `${style.navLink}`;
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={style.header}>
      <Box>
        <div className={style.box}>
          <nav className={style.nav}>
            <ul className={style.page}>
              <li>
                <NavLink className={activeClassName} end to="/">
                  Home
                </NavLink>
              </li>
              {isLoggedIn && (
                <li>
                  <NavLink className={activeClassName} to="/contacts">
                    Contacts
                  </NavLink>
                </li>
              )}
            </ul>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <ul className={style.log}>
                <li>
                  <NavLink to="/registration" className={activeClassName}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className={activeClassName}>
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </Box>
    </header>
  );
};
