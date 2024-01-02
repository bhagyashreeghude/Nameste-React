import React from "react";
import  ReactDOM from "react-dom";
const Header =( ) => {
    return(
        <div className= "header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )};




const RestaurantCard =(props)=>{
    const {resData }= props;
    console.log(resList.name)

    const {image,name,locality,rating,order,cft}=resData?.info;

    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo"
                src= {
                    
                resData.info.image.url
                }
            />
          <h3>{resData.info.name}</h3>
          <h4>add-{resData.info.locality.name}</h4>
          <h4>{resData.info.rating.aggregate_rating} stars</h4>   
          <h4>Time- {resData.order.deliveryTime}</h4>
          <h4>{resData.info.cft.text}</h4>
            </div>
    );
};

const resList = [
    {
    "type": "restaurant",
    "info": {
        "resId": 100813,
        "name": "Kota Kachori - Falahaar",
        "image": {
            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/100670\/45741318d1adfdd73a645e6a93d0b51d_o2_featured_v2.jpg"
            },
        "o2FeaturedImage": {
            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/100670\/45741318d1adfdd73a645e6a93d0b51d_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            "aggregate_rating": "4.0",
            "rating_text": "4.0",
            "rating_subtitle": "Very Good",
            "rating_color": "5BA829",
            "votes": "5,152",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "3.7",
                    "reviewCount": "4",
                    "reviewTextSmall": "4 Reviews",
                    "subtext": "4 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "3.7",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "4.2",
                    "reviewCount": "5,148",
                    "reviewTextSmall": "5,148 Reviews",
                    "subtext": "5,148 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "4.2",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "700"
                    },
                    "newOnDelivery": false
                }
            }
        },
        "cft": {
            "text": "\u20b9300 for two"
        },
        "cfo": {
            "text": "\u20b9100 for one"
        },
        "locality": {
            "name": "C Scheme, Jaipur",
            "address": "K-1, 2, Trimurti Vijay City Point, Ahinsa Circle, C Scheme, Jaipur",
            "localityUrl": "jaipur\/c-scheme-restaurants"
        },
        "timing": {
            "text": "",
            "color": ""
        },
        "cuisine": [
            {
                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/street-food\/",
                "name": "Street Food"
            },
            {
                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/mithai\/",
                "name": "Mithai"
            },
            {
                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/desserts\/",
                "name": "Desserts"
            }
        ],
        "should_ban_ugc": false,
        "costText": {
            "text": "\u20b9100 for one"
        }
    },
    "order": {
        "deliveryTime": "16 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
            "text": "Order Now",
            "clickUrl": "\/jaipur\/kota-kachori-falahaar-c-scheme\/order"
        }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
        "text": "",
        "clickUrl": "\/jaipur\/kota-kachori-falahaar-c-scheme\/order",
        "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F100813%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
    },
    "distance": "507 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
        {
            "table_name": "zsearch_events_log",
            "payload": "{\"search_id\":\"b7987b7f-ee5b-4fbb-b699-8d99516b73c1\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"100813\",\"element_type\":\"listing\",\"rank\":1}",
            "event_names": {
                "tap": "{\"action\":\"tap\"}",
                "impression": "{\"action\":\"impression\"}"
            }
        }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
        {
            "text": "50% OFF",
            "color": {
                "tint": "500",
                "type": "blue"
            }
        }
    ],
    "isDisabled": false,
    "bottomContainers": [
        {
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                "aspect_ratio": 2.0625
            },
            "text": "Restaurant partner follows WHO protocol"
        }
    ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18833754,
            "name": "La Pino'z Pizza",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/18761311\/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/18761311\/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "8,566",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "164",
                        "reviewTextSmall": "164 Reviews",
                        "subtext": "164 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "8,402",
                        "reviewTextSmall": "8,402 Reviews",
                        "subtext": "8,402 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9350 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "C Scheme, Jaipur",
                "address": "Unit G 1, The Landmark Appartment, Ahinsa Circle, C Scheme, Jaipur",
                "localityUrl": "jaipur\/c-scheme-restaurants"
            },
            "timing": {
                "text": "Temporarily closed for dining, will be back soon!",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/pasta\/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/italian\/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "21 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/la-pinoz-pizza-c-scheme\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/la-pinoz-pizza-c-scheme\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F18833754%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "435 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18833754\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18968424,
            "name": "Mahaveer Rabdi Bhandar Jain",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/103200\/3dbd23938de08869e1e34b499678955d_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/103200\/3dbd23938de08869e1e34b499678955d_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "7,645",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "7,645",
                        "reviewTextSmall": "7,645 Reviews",
                        "subtext": "7,645 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9150 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Pink City, Jaipur",
                "address": "Mishra Rajaji Ka Rasta, Chandpole Bazar, Chandpole, Pink City, Jaipur",
                "localityUrl": "jaipur\/pink-city-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/mithai\/",
                    "name": "Mithai"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "27 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/mahaveer-rabdi-bhandar-jain-pink-city\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/mahaveer-rabdi-bhandar-jain-pink-city\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F18968424%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "1.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18968424\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 102695,
            "name": "Thali and More",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/102695\/b49ba314385c6c23d17128420a3d03f9_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/102695\/b49ba314385c6c23d17128420a3d03f9_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "28.5K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.6",
                        "reviewCount": "7,488",
                        "reviewTextSmall": "7,488 Reviews",
                        "subtext": "7,488 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.6",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "21K",
                        "reviewTextSmall": "21K Reviews",
                        "subtext": "21K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b91,200 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "C Scheme, Jaipur",
                "address": "C-46 B, 1st Floor, Sarojini Marg, Panch Batti, Near Punjab National Bank, C Scheme, Jaipur",
                "localityUrl": "jaipur\/c-scheme-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/biryani\/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/shake\/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/thali-and-more-c-scheme\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/thali-and-more-c-scheme\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F102695%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "718 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"102695\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 101881,
            "name": "Tan - Sukh By Kanha",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/100390\/6af775baeb93451dc3222a045a872622_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/100390\/6af775baeb93451dc3222a045a872622_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "5,009",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "340",
                        "reviewTextSmall": "340 Reviews",
                        "subtext": "340 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "4,669",
                        "reviewTextSmall": "4,669 Reviews",
                        "subtext": "4,669 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b91,200 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "C Scheme, Jaipur",
                "address": "E-62, Bhagat Singh Marg, C Scheme, Jaipur",
                "localityUrl": "jaipur\/c-scheme-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/salad\/",
                    "name": "Salad"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/mexican\/",
                    "name": "Mexican"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/oriental\/",
                    "name": "Oriental"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/italian\/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODhcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/rajasthani\/",
                    "name": "Rajasthani"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/desserts\/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/tan-sukh-by-kanha-c-scheme\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/tan-sukh-by-kanha-c-scheme\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F101881%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "993 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"101881\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19790715,
            "name": "That Andhra Guy",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/19790715\/dca0a3f2360e7c2efafd725e476c586e_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/19790715\/dca0a3f2360e7c2efafd725e476c586e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,647",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "32",
                        "reviewTextSmall": "32 Reviews",
                        "subtext": "32 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "2,615",
                        "reviewTextSmall": "2,615 Reviews",
                        "subtext": "2,615 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9450 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "C Scheme, Jaipur",
                "address": "5-A Parivahan marg C- SCHEME Jaipur-I Ward 1, C Scheme, Jaipur",
                "localityUrl": "jaipur\/c-scheme-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/andhra\/",
                    "name": "Andhra"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/biryani\/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/sea-food\/",
                    "name": "Seafood"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/desserts\/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "30 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/that-andhra-guy-c-scheme\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/that-andhra-guy-c-scheme\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F19790715%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19790715\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18681256,
            "name": "The Pizza Unlimited",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/18681256\/d359fbe51e5dd29eea1687202ae03e65_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/18681256\/d359fbe51e5dd29eea1687202ae03e65_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "28K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.4",
                        "reviewCount": "554",
                        "reviewTextSmall": "554 Reviews",
                        "subtext": "554 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "27.4K",
                        "reviewTextSmall": "27.4K Reviews",
                        "subtext": "27.4K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Pink City, Jaipur",
                "address": "1304, Baba Harishchand Marg, Pink City, Jaipur",
                "localityUrl": "jaipur\/pink-city-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/rolls\/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/street-food\/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "27 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/the-pizza-unlimited-pink-city\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/the-pizza-unlimited-pink-city\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F18681256%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "1.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18681256\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 101837,
            "name": "Agarwal Caterers",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/100756\/f06cf41f8fe738a3b1d1fcd125ede6cc_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/100756\/f06cf41f8fe738a3b1d1fcd125ede6cc_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "345.7K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.7",
                        "reviewCount": "59",
                        "reviewTextSmall": "59 Reviews",
                        "subtext": "59 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "345.7K",
                        "reviewTextSmall": "345.7K Reviews",
                        "subtext": "345.7K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9200 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Shastri Nagar, Jaipur",
                "address": "E-53, Near Science Park, Shastri Nagar, Jaipur",
                "localityUrl": "jaipur\/shastri-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/mithai\/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "24 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/agarwal-caterers-shastri-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/agarwal-caterers-shastri-nagar\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F101837%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"b79d0ad1-5993-4e0a-91aa-1495a626a00f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"101837\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20272779,
            "name": "Bakingo",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20272779\/78b72ec087038aaceb8263ce77367817_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20272779\/78b72ec087038aaceb8263ce77367817_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "3,667",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "3,667",
                        "reviewTextSmall": "3,667 Reviews",
                        "subtext": "3,667 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Bais Godam, Jaipur",
                "address": "7B, Shop 1, Hawa Sarak 22 Patel Nagar, Bais Godam, Jaipur",
                "localityUrl": "jaipur\/bais-godam-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/desserts\/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "21 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/bakingo-bais-godam\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/bakingo-bais-godam\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F20272779%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "2.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20272779\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19814979,
            "name": "The Busy Beans",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/19814979\/8b9037baefd1892aee934afb40c62771_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/19814979\/8b9037baefd1892aee934afb40c62771_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "1,303",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "67",
                        "reviewTextSmall": "67 Reviews",
                        "subtext": "67 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "1,236",
                        "reviewTextSmall": "1,236 Reviews",
                        "subtext": "1,236 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9350 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Raja Park, Jaipur",
                "address": "Plot 197, Ram Gali 2, 1st Cross, Suraj Maidan Road, Raja Park, Jaipur",
                "localityUrl": "jaipur\/raja-park-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/shake\/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/burger\/",
                    "name": "Burger"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "34 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/the-busy-beans-raja-park\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/the-busy-beans-raja-park\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F19814979%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "3.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19814979\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19150060,
            "name": "The Kathi Roll Express",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/19150060\/11529621332482acb00968442435cc05_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/19150060\/11529621332482acb00968442435cc05_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "18.6K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "181",
                        "reviewTextSmall": "181 Reviews",
                        "subtext": "181 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "18.4K",
                        "reviewTextSmall": "18.4K Reviews",
                        "subtext": "18.4K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Lal Kothi, Jaipur",
                "address": "C-49-50, Greater Kailash Colony, Janpath, Lal Kothi, Jaipur",
                "localityUrl": "jaipur\/lal-kothi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/rolls\/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/burger\/",
                    "name": "Burger"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "29 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/the-kathi-roll-express-lal-kothi\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/the-kathi-roll-express-lal-kothi\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F19150060%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "3.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19150060\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20193020,
            "name": "Unlimited Pizza and Fast Food Corner",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/20193020\/930956c7636a771d82c8bc50ee2a0084_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/20193020\/930956c7636a771d82c8bc50ee2a0084_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "223",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "223",
                        "reviewTextSmall": "223 Reviews",
                        "subtext": "223 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Amer Road, Jaipur",
                "address": "Kagdiwara, Brahmpuri, Amer Road, Jaipur",
                "localityUrl": "jaipur\/amer-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/jaipur\/restaurants\/street-food\/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "38 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/jaipur\/unlimited-pizza-and-fast-food-corner-1-amer-road\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/jaipur\/unlimited-pizza-and-fast-food-corner-1-amer-road\/order",
            "clickActionDeeplink": "https:\/\/link.zomato.com\/xqzv\/v17twtu8?deep_link_value=zomato%3A%2F%2Forder%2F20193020%3Futm_campaign%3Deaeec4ed3cd28b682a17f7bbce1aaf9a%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ca7bffdd-9ba2-4d5b-a361-cd676d468192\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138164474957791232\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20193020\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
]

const Body=()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="restro-container">
                {
                    resList.map(restaurant => 
                    <RestaurantCard key={restaurant.info.resId} resData={restaurant}
                    />)
                }  
            </div>
        </div>
    );
};

const Footer =( )=>{
    return(
        <div className="copywrite">from Zomato  Developed by Shree</div>
    )
}



const AppLayout = ()=> {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
        );
    };
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)