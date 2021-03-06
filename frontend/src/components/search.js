import { useState } from "react";
import SearchImg from "../img/search.png";
import UserSmByline from "./user/user-sm-byline";

const Search = () => {
  const [search, setSearch] = useState();
  const [searchValue, setSearchValue] = useState();
  const [searchResult, setSearchResult] = useState();
  /**
   * This function will take input value from search input and find a user
   * @param {string} search          the input value
   * @param {string} searchValue     the input value with uppercase character
   * @param {string} searchResult    the search result
   */
  async function liveSearch() {
    setSearchValue(search.charAt(0).toUpperCase() + search.slice(1));
    const res = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: searchValue,
      }),
      redirect: "follow",
    });
    const data = await res.json();
    if (data !== null) {
      setSearchResult(data.data._id);
      console.log(data.data._id);
    } else {
      console.log(data);
    }
    console.log(searchValue);
  }
  return (
    <>
      <div className="search-body">
        <div className="search-box">
          <input
            type="text"
            name="firstname"
            placeholder="Find friends by search!"
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={liveSearch}
          />
          <img src={SearchImg} alt="" onClick={() => liveSearch()} />
        </div>
        {searchResult && <UserSmByline id={searchResult} />}
      </div>
    </>
  );
};

export default Search;
