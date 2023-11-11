import authOperations from 'redux/auth/auth_operations';

import authSelectors from 'redux/auth/seletors';

import { toast } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export const useLogOutHook = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const getUserToken = useSelector(authSelectors.getUserToken);
  const getUsername = useSelector(authSelectors.getUsername);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = isLoggedIn && getUserToken;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logOut(getUserToken))
      .unwrap()
      .then(() => navigate('/contacts'), toast.success(`You are out ✅`))
      .catch(error => toast.error('Please try again 🤔'));
  };
  return { handleSubmit, isLogin, getUsername };
};
