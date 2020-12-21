function SearchBar({ setQuery }) {
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
