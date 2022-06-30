import { Input } from "antd";

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <button>Search</button>
      <Input
        className="searchInput"
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
