import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth_operations';
import { getUsername } from 'redux/selectors';
import style from './UserMenu.module.css';
import defaultAvatar from '../../img/defaultAvatar.jpg';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={style.box}>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <div className={style.miniBox}>
        <span className={style.name}>Welcome, {name}!</span>
        <button className={style.exit} type="button" onClick={handleLogOut}>
          Exit
        </button>
      </div>
    </div>
  );
}
