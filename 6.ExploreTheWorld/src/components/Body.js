import RestaurantCard from "./RestaurantCard";
import { Restaurantlist } from "../constants";
import { useEffect, useState } from "react";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(Restaurantlist);
  const [searchInput, setSearchInput] = useState("");
  //const [searchClicked, setSearchClicked] = useState("false");

  useEffect(() => {
    console.log("useEffect usage");
  }, [searchInput]);

  console.log("render");

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
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
