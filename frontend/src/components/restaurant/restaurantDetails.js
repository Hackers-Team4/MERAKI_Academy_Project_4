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
        const userId = result.data.user;
        // console.log("userid",result.data[0].user)
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
          <p style={{ fontSize: "35px" }}>{restaurant.restaurantName}</p>
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

            <button onClick={goToBook} className="btnBooking">Booking</button>

          </div>
        </div>
      </div>

      <div className="description">
        {/* <p style={{fontSize:"30px"}}>{restaurant.restaurantName}</p> */}
        <p style={{ marginTop: "10px" }}>{restaurant.description}</p>
      </div>
      <button className="btnMenu" onClick={() => setShow(!Show)}>menu</button>

      {Show ? (
        <div className="menuList">
          <div >
            {restaurant.menu && <p>Main Course:</p>}
            <div style={{ marginTop: "10px" }}>
              {restaurant.menu && restaurant.menu.mainCourse.map((elem) => {
                return <div >

                  <ul>
                    <li >{elem}</li>
                  </ul>
                </div>
              })}
            </div>
          </div>
          <div>
            {restaurant.menu && <p>Drinks:</p>}
            <div style={{ marginTop: "10px" }}>
              {restaurant.menu && restaurant.menu.drinks.map((elem) => {
                return <div>

                  <ul>
                    <li>{elem}</li>
                  </ul>
                </div>
              })}
            </div>
          </div>
          <div>
            {restaurant.menu && <p>Dessert:</p>}
            <div style={{ marginTop: "10px" }}>
              {restaurant.menu && restaurant.menu.dessert.map((elem) => {
                return <div>
                  <ul>
                    <li>{elem}</li>
                  </ul>
                </div>
              })}
            </div>
          </div>
        </div>
      ) : null}
      <SRLWrapper>
        {" "}
        {/* {restaurant.images &&
          restaurant.images.map((elem, i) => {
            return (
              <a href={`${elem}`}>
                <img src={`${elem}`} />
              </a>
            );
          })} */}
        <div className="imageSliderP">
          <img src={`${restaurant.images && restaurant.images[0]}`} style={{ width: "700px", height: "400px", borderRadius: "5px" }} />
          <div className="imageSliderC">
            <img src={`${restaurant.images && restaurant.images[1]}`} style={{ width: "172px", height: "172px", borderRadius: "5px" }} />
            <img src={`${restaurant.images && restaurant.images[2]}`} style={{ width: "172px", height: "172px", borderRadius: "5px" }} />
            <img src={`${restaurant.images && restaurant.images[3]}`} style={{ width: "172px", height: "172px", borderRadius: "5px" }} />
            <img src={`${restaurant.images && restaurant.images[4]}`} style={{ width: "172px", height: "172px", borderRadius: "5px" }} />
          </div>
        </div>
      </SRLWrapper>


      {/* <p id="ff">menu 1111111111111111111111111111111</p> */}

      {/* <a href="#ff">GO to section</a> */}
      <div >
        {props.token5 ? (
          <Rating_1 userDetails={props.user5} restaurantDetails={restaurant} />
        ) : (
          ""
        )}
      </div>
      {review && review.map((elem) => {
        return <div className="commant">
          <div>
            <img src={`${elem.user.image && elem.user.image}`} style={{ width: "60px", height: "60px", borderRadius: "5px" }} />
          </div>
          <div>
            {elem.user.firstName && <p style={{ fontSize: "30px" }}>{elem.user.firstName}</p>}
            {/* {elem.user.rating}/5 */}
            <p style={{ marginTop: "10px" }}>{elem.comment}</p>
          </div>
        </div>
      })}
    </>
  );
};
export default RestaurantDetails;