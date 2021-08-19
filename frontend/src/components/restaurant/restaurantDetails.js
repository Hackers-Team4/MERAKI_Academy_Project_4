import React, { useState, useEffect } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import Rating_1 from "./../review_1/reating_1";
import Starts from "./../review_1/Starts";
import "./restaurantDetails.css"
const RestaurantDetails = (props) => {

  const [review, setReview] = useState("")
  const [restaurant, setRestaurant] = useState("");
  const [Show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [avg, setAvg] = useState(0);
  const [newComment, setNewComment] = useState("");
  // const [price,setPrice]=useState("")
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
        props.token1(response.data[0]);
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
  const avarge = (num) => {
    setAvg(num + avg);
  }
  const deleateComment = (id) => {
    axios
      .delete(`http://localhost:5000/review_delete/${id}`)
      .then((result) => {
        // const userId = result.data.user;
        // console.log("userid",result.data[0].user)
        // setReview(result.data)
      })
      .catch((err) => {
        console.log("rrrrrrrrrrr", err);
      });

  }

  const updateComment = (id) => {

    axios.put(`http://localhost:5000/review_update/${id}`, { comment: newComment })
      .then((result) => {
        // const userId = result.data.user;
        // console.log("userid",result.data[0].user)
        // setReview(result.data)
      })
      .catch((err) => {
        console.log("rrrrrrrrrrr", err);
      });

  }
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
            </svg>
            <p>{restaurant.price && restaurant.price}</p>
            <button onClick={goToBook} className="btnBooking">Booking</button>

          </div>
        </div>
        <Starts starts={5} />
      </div>

      <div className="description">
        {/* <p style={{fontSize:"30px"}}>{restaurant.restaurantName}</p> */}
        <p style={{ marginTop: "10px" }}>{restaurant.description}</p>
      </div>
      <button className="btnMenu" onClick={() => setShow(!Show)}>menu</button>

      {Show ? (
        <div className="menuList">
          <div >
            {restaurant.menu && <p className="listM">Main Course:</p>}
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
            {restaurant.menu && <p className="listM">Drinks:</p>}
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
            {restaurant.menu && <p className="listM">Dessert:</p>}
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


      <div className="infogoogle">

        <p className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2502125560027!2d35.908047814495006!3d31.9541080327944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca07eb4b60fa7%3A0x654667f3182a0a00!2s3rd%20Cir.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1623437240897!5m2!1sen!2sjo
" width="200" height="200" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe></p><br></br>
        <p>Service options: Dine-in · Takeaway · No-contact delivery</p>
        <br></br>
        <p>Hours:Closes 10PM</p>

      </div>


      {/* <p id="ff">menu 1111111111111111111111111111111</p> */}

      {/* <a href="#ff">GO to section</a> */}
      <div >
        {props.token5 ? (
          <Rating_1 userDetails={props.user5} restaurantDetails={restaurant} />
        ) : (
          ""
        )}
      </div>

      {review && review.map((elem, i) => {
        return <div className="commant" key={i}>
          <div>
            <img src={`${elem.user.image && elem.user.image}`} style={{ width: "60px", height: "60px", borderRadius: "5px" }} />
          </div>
          <div>
            {elem.user.firstName && <p style={{ fontSize: "30px" }}>{elem.user.firstName}</p>}
            <p style={{ marginTop: "10px" }}>{elem.comment}</p>

          </div>
          <Starts starts={elem.rating} />
          {/* {props.user5._id==elem.user._id} */}

          {props.user5._id == elem.user._id ? <div>
            <svg onClick={() => { deleateComment(elem._id) }} xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer" }} width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg></div> : ""}

          {props.user5._id == elem.user._id ? <div className="textareaUpdate">  <svg onClick={() => { setShowInput(!showInput) }} xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer" }} width="25" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
            {showInput ? <div><textarea type="text" defaultValue={elem.comment} onChange={(e) => {
              setNewComment(e.target.value)
            }} /> <button className="btnCommant" onClick={() => { updateComment(elem._id) }}>update</button></div> : ""}
          </div > : ""}

          {/* <div> <button style={{width:"20px",height:"20px",justifyContent:"center"}} >x</button></div> */}
        </div>


      })}
    </>
  );
};
export default RestaurantDetails;