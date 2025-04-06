const SearchBox = ({ handleChange, text }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={(e) => handleChange(e.target.value)} value={text} />
    </div>
  );
};

export default SearchBox;
