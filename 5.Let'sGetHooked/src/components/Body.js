import RestaurantCard from "./RestaurantCard";
import { Restaurantlist } from "../constants";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <h1>{searchClicked}</h1>
        <button
          className="search-btn"
          onClick={() => {
            if (searchClicked == "false") {
              setSearchClicked("true");
            } else {
              setSearchClicked("false");
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {Restaurantlist.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
