import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravel,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{lastMileTravel} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
