const Input = ({ setSearchQuery }) => {
  const handleSearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  return (
    <div className='input-container'>
      <input type='search' placeholder='Search...' onChange={handleSearch} />
    </div>
  );
};
export default Input;
