import css from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFIlter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={css["container-search"]}>
      <p className={css.title}>Search by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => handleFIlter(e.target.value)}
        className={css.input}
      />
    </div>
  );
}
