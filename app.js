import React from "react";
import ReactDOM from "react-dom/client";

// Inline Style in JSX is passed over as Javascript Object. 

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

const RestraurantCard = (props) => {
	return (
		<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
			<img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCggSUwCg0vfyJDtYM_FpfKJjP06rpL21xhSuHUEAsQ&s" />
			<h3>{props.name}</h3>
			<h4>{props.cuisines}</h4>
			<h4>{props.avgRating} ⭐</h4>
			<h4>{props.deliveryTime} ⌚</h4>
			<h4>{props.costForTwo/100} </h4>

		</div>
	);
}


const resObj =  {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "559117",
                  "name": "PVR Cafe",
                  "uuid": "b2931724-bda4-452a-b8b1-8303324900cb",
                  "city": "4",
                  "area": "Vasant Vihar",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "mjlxbojjky2vf1o3ajak",
                  "cuisines": [
                    "Snacks",
                    "Fast Food",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "slaString": "32 MINS",
                  "lastMileTravel": 0.699999988079071,
                  "slugs": {
                    "restaurant": "pvr-cafe-vasant-vihar-south-campus",
                    "city": "delhi"
                  },
                  "cityState": "4",
                  "address": "61 COMMUNITY CENTER BASANT LOK VASANT VIHAR NEW DELHI 110057",
                  "locality": "Basant Lok",
                  "parentId": 11664,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3800,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": "Closes soon"
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "559117",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 0.699999988079071,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.5",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              };

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				<RestraurantCard resData={resObj}/>
				<RestraurantCard resName="KFC" cuisine="Continental" rating="4.4" eta="29min" />
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
