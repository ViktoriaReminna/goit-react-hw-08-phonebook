import authOperations from 'redux/auth/auth_operations';

import { useState } from 'react';

import { toast } from 'react-hot-toast';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export const useSingUpHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      await dispatch(
        authOperations.register({ name, email, password })
      ).unwrap();
      handleSignUpSuccess();
    } catch (error) {
      handleSignUpError(error);
    }
  };

  const handleSignUpSuccess = () => {
    toast.success('Account created successfully ✅');

    setName('');
    setEmail('');
    setPassword('');

    navigate('/dashboard');
  };

  const handleSignUpError = error => {
    toast.error(
      `Registration failed. Please try again. ${error.message || ''}`
    );
  };

  return { handleSubmit, handleChange, name, email, password };
};
