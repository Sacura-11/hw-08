import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    return dispatch(setFilter(event.target.value));
  };
    

    return (
        <div className={css.filterContainer}>
            <p className={css.filterField}>Find contact by name</p>
            <input className={css.filterInput}
                name="filter"
                type="text"
                id="filter"
                value={filter}
                onChange={handleFilterChange} />
        </div>
    );
};