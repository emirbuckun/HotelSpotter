import { FaSearch } from "react-icons/fa";
const Search = ({ setSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        // onChange={}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={({ currentTarget: input }) => setSearch(input.value)}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
