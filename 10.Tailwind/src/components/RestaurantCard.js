import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <div>
        <h3
          style={{
            justifyContent: "space-evenly",
            textAlign: "center",
            margin: "5px",
          }}
        >
          {lastMileTravelString} {avgRating}
        </h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
