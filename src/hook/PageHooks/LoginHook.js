import authOperations from 'redux/auth/auth_operations';

import { useState } from 'react';

import { toast } from 'react-hot-toast';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export const useLogInHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await dispatch(authOperations.logIn({ email, password })).unwrap();
      navigate('/contacts');
      toast.success(`You have successfully logged in ✅`);
    } catch (error) {
      toast.error(`Login failed. Try again. ${error.message || ''}`);
    } finally {
      setIsLoading(false);

      setEmail('');
      setPassword('');
    }
  };

  return { handleChange, handleSubmit, email, password, isLoading };
};

export default useLogInHook;
