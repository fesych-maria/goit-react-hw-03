const SearchBox = ({ handleChange, value }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={(e) => handleChange(e.target.value)} value={value} />
    </div>
  );
};

export default SearchBox;
