function Filter({ setSearchName }) {
  return (
    <input
      placeholder="Product name"
      className="filter"
      onChange={(e) => setSearchName(e.target.value)}
      type="text"
    />
  );
}

export { Filter };
