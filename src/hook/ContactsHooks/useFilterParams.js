import { selectFilter, setFilter } from 'redux/FilterSlice/filterSlice';

import { useDispatch, useSelector } from 'react-redux';

export const useFilterParams = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e =>
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));

  return { filter, onChange };
};
