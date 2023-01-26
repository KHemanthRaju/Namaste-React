import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

/**
 *  Header
 *      - Logo
 *      - nav items
 *  Body
 *      - search bar
 *      - Restaurantlist
 *          -RestaurantCard
 *              -Image
 *              -Name
 *              - Prices
 *              - Cuisines
 *  Footer
 *      - Copyright
 *      - Address
 *      - Links
 */

//React Component
// const Container = () => {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <h2>Hello World 2</h2>
//         </div>
//     );
// }

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
