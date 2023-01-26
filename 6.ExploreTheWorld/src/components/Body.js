import RestaurantCard from "./RestaurantCard";
import { Restaurantlist } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //const [searchClicked, setSearchClicked] = useState("false");

  useEffect(() => {
    getRestaurants();
  }, [searchInput]);

  console.log("render");

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3900857&lng=78.49333519999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
