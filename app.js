import React from "react";
import ReactDOM from "react-dom/client";


/*
 * Header
 *  - Logo
 *  - Nav Bar
 * Body
 *  -Search
 *  - RestaurantContainer
 *  - RestaurantCard
 *    - Img
 *    - Name of Res, Star Rating, Cuisine, Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact	
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestraurantCard = () => {
	return (
		<div className="res-card">
			<h3>Faasos</h3>
		</div>
	);
}

const Body = () => {
	return (
		<div className = "body">
			<div className="search">Search</div>
			<div className="res-container">
				<RestraurantCard />
			</div>
		</div>
	);
};

const AppLayout = () => {
  return (
  <div className="app">
    <Header />
    <Body />
  </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<AppLayout />);
