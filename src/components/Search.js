import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`You searched for ${searchTerm}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Need a quick search?"
        />

        <i
          className="fa-solid fa-magnifying-glass search-icon"
          onClick={handleSubmit}
        ></i>
      </form>
    </div>
  );
};

export default Search;
