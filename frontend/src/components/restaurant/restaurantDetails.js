import React, { useState, useEffect } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import Rating_1 from "./../review_1/reating_1";
import "./restaurantDetails.css"
const RestaurantDetails = (props) => {

  const [review, setReview] = useState("")
  const [restaurant, setRestaurant] = useState("");
  const [Show, setShow] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  // useEffect(() => {
  // 	const data = localStorage.getItem("token");
  // 	props.token6(data)
  // })
  // useEffect(() => {
  // 	const data =JSON.parse( localStorage.getItem("users"));
  // 	props.user55(data)
  //   })

  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants/${id}`)
      .then(async (response) => {
        await setRestaurant(response.data[0]);
        props.book1(response.data[0])
      })
      .catch((err) => {
        console.log(err);
      });
  }, [restaurant]);

  const goToBook = () => {
    if (props.token5) {
      history.push(`/booking`);
    } else {
      history.push(`/login`);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/reviews/${id}`)
      .then((result) => {
        setReview(result.data)
      })
      .catch((err) => {
        console.log("rrrrrrrrrrr", err);
      });
  }, [review])
  return (
    <>
      <div className="RN">
        <img src={`${restaurant.images && restaurant.images[0]}`} className="firstImg" />
        <div className="RInfo">
          <p style={{fontSize:"50px"}}>{restaurant.restaurantName}</p>
          <div className="loc_type">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <p>{restaurant.location}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
              <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
            </svg>
            <p>{restaurant.typeOfFood}</p>
          </div>
        </div>
      </div>
      <p>{restaurant.description}</p>
      <button onClick={goToBook}>Booking</button>

      <SRLWrapper>
        {" "}
        {restaurant.images &&
          restaurant.images.map((elem, i) => {
            return (
              <a href={`${elem}`}>
                <img src={`${elem}`} />
              </a>
            );
          })}
      </SRLWrapper>
      <button onClick={() => setShow(!Show)}>menu</button>

      {Show ? (
        <p>
          main course : {restaurant.menu && restaurant.menu.mainCourse}
          <p>
            drinks : {restaurant.menu && restaurant.menu.drinks}
            <p>dessert : {restaurant.menu && restaurant.menu.dessert}</p>
          </p>
        </p>
      ) : null}

      {/* <p id="ff">menu 1111111111111111111111111111111</p> */}

      {/* <a href="#ff">GO to section</a> */}

      {props.token5 ? (
        <Rating_1 userDetails={props.user5} restaurantDetails={restaurant} />
      ) : (
        ""
      )}
      {review && review.map((elem) => {
        return <p>{elem.comment}</p>
      })}
    </>
  );
};
export default RestaurantDetails;