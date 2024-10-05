import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={`${css.form} ${css.formGroup}`}>
      <p className={css.label}>Search by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
}
