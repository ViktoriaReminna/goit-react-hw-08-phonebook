import { useDispatch, useSelector } from 'react-redux';

import { InputFilter } from './ContactFilter.styled';

import { getFilter } from '../../redux/selectors';

import 'react-toastify/dist/ReactToastify.css';

import { setFilter } from '../../redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label name="filter">
      <InputFilter
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        onChange={event => {
          onChange(event);
        }}
        value={filtered}
      />
    </label>
  );
};
