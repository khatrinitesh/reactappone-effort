import React from "react";
import SearchIcon from "./searchicon";

export default function SearchBar({
  handleSearch,
  nextWord,
  searchValue,
  selectSug,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Tab") selectSug(false, nextWord);
  };

  return (
    <>
      {searchValue && (
        <p className="tip">
          Hit the <span>Tab</span> key to accept suggestion
        </p>
      )}
      <div className="search-bar">
        <input
          type="text"
          className="search-bar__input"
          name="search"
          placeholder="Enter search keyboard"
          onChange={handleSearch}
          value={searchValue}
          spellCheck={true}
          onKeyDown={handleKeyDown}
        />
        {searchValue && nextWord && (
          <span className="search-bar__suggestion">
            <i>{nextWord}</i>
          </span>
        )}
        <span className="search-bar__icon" onClick={() => alert(searchValue)}>
          <SearchIcon />
        </span>
      </div>
    </>
  );
}
