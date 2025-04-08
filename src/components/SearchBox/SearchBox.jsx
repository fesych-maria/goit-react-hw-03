import css from "./SearchBox.module.css";

const SearchBox = ({ handleChange, value }) => {
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input onChange={(e) => handleChange(e.target.value)} value={value} />
    </div>
  );
};

export default SearchBox;
