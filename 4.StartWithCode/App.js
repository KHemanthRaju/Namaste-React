import React from 'react';
import ReactDOM from 'react-dom';
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

const Title = () => {
    return(
        <img className='logo' alt="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
    );
}

const Header = () => {
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const Restaurantlist = [
    {
    name:"Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hsnf1lavedzh3tthlf7s",
    cuisines:["Burger","American"],
    stars:"4.2"
},{
    name:"Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hsnf1lavedzh3tthlf7s",
    cuisines:["Burger","American"],
    stars:"4.2"
},{
    name:"Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hsnf1lavedzh3tthlf7s",
    cuisines:["Burger","American"],
    stars:"4.2"
},{
    name:"Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hsnf1lavedzh3tthlf7s",
    cuisines:["Burger","American"],
    stars:"4.2"
},{
    name:"Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hsnf1lavedzh3tthlf7s",
    cuisines:["Burger","American"],
    stars:"4.2"
}]

const RestaurantCard = () => {
    return (
        <div className='card'>
            <img src={Restaurantlist[0].image}/>
            <h1>{Restaurantlist[0].name}</h1>
            <h2>{Restaurantlist[0].cuisines.join(", ")}</h2>
            <h3>{Restaurantlist[0].stars}</h3>
        </div>
    );
}

const Body = () => {
    return(
        <div className='restaurant-list'>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    );      
}

const Footer = () => {
    return (
        <h1>Hello World</h1>
    );
}

const AppLayout = () => {
    
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);