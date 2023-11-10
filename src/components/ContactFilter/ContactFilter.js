import { useDispatch, useSelector } from 'react-redux';

import { InputFilter } from './ContactFilter.styled';

import { selectFilteredContact } from '../../redux/selectors';

import 'react-toastify/dist/ReactToastify.css';

import { changeFilterAction } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilteredContact);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(changeFilterAction(event.currentTarget.value));
  };

  return (
    <label>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contacts by name"
        onChange={handleFilter}
      />
    </label>
  );
};
