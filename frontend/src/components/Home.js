import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import axios from "axios";
import "./Slider.css";
const slideImages = [
  "https://cache.marriott.com/marriottassets/marriott/DXBTP/dxbtp-liv-restaurant-6592-hor-feat.jpg",
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://www.hotelvistabella.com/img/imgHome/1_273.jpg",
  "https://casapacha.com/sites/formentera/files/2021-05/r%20CP-Web%20Desktop-Photos%20Selection_1920x1080_Restaurant%202.jpg",
];

const Home = (props) => {
  //const [japanese,setJapanese]=useState("")
  const history = useHistory();

  const callType_1 = (str) => {
    axios
      .get(`http://localhost:5000/restaurant/search_1?typeOfFood=${str}`)

      .then((response) => {
        console.log(response.data);
        props.type1(response.data);
        history.push(`/restaurants/${str}`);
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  return (
    <>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${slideImages[0]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${slideImages[1]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${slideImages[2]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${slideImages[3]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${slideImages[4]})` }}
            ></div>
          </div>
        </Slide>
      </div>
      <div className="parantimag">
      <div class="container">
         <img
            className="image"
            src="https://www.christineabroad.com/images//2019/09/japanese-food.jpg"
            onClick={() => {
              callType_1("Japanese");
            }}
          />
  <div class="overlay" onClick={() => {
              callType_1("Japanese");
            }}>
    <div class="text">Japanese</div>
  </div>
  </div>
        
         <div class="container">
         <img
            className="image"
            src="https://www.thespruceeats.com/thmb/ZQwm9uBktp9d5TqZsy0K8yiUEe4=/5270x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homemade-falafel-with-salad-tahini-sauce-on-flat-bread-591217253-5825ff835f9b58d5b12bc1a3.jpg "
            onClick={() => {
              callType_1("Arabic");
            }}
          />
  <div class="overlay" onClick={() => {
              callType_1("Arabic");
            }}>
    <div class="text">Arabic</div>
  </div>
</div>
        
        
<div class="container">
        <img
            className="image"
            src="https://www.thesun.co.uk/wp-content/uploads/2020/08/NINTCHDBPICT000603046726.jpg"
            onClick={() => {
              callType_1("Italian");
            }}
          />
  <div class="overlay" onClick={() => {
              callType_1("Italian");
            }}>
    <div class="text">Italian</div>
  </div>
</div>

{/* _________________ */}

<div class="container">
        <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-3M9_g7uDWXsuN7FeKVVXFOOf6C2yGr3og&usqp=CAU"
            onClick={() => {
              callType_1("Italian");
            }}
          />
  <div class="overlay" onClick={() => {
              callType_1("Lebanese");
            }}>
    <div class="text">lebanese</div>
  </div>
</div>




{/* __________________ */}
      </div>
      <div className="text-home">How to Use website ?</div>

<div className="home-picture">
  <div>
          <img
            className="image-home"
            style={{ height: "77px",width:"220px" }}
            src="https://www.reserveout.com/img/loyality/arrows_1.png"
          />
          <p style={{ textAlign:"center",fontSize:"20px",color:"grey" }} >Find a restaurant</p>
          </div>
          <div>
          <img
            className="image-home"
            style={{ height: "77px",width:"220px" }}
            src="https://www.reserveout.com/img/loyality/arrows_2.png"
          />
        
          <p style={{ textAlign:"center",fontSize:"20px",color:"grey" }}>Make a reservation</p>
          </div>
          <div>
          <img
            className="image-home"
            style={{ height: "77px",width:"220px" }}
            src="https://www.reserveout.com/img/loyality/arrows_3.png"
          />
          <p style={{ textAlign:"center" ,fontSize:"20px",color:"grey" }}>Enjoy your meal</p>
          </div>
</div>

        <div>
              <img
                    style={{ width:"100%",height:"600px" }}
                    src="https://wallpapercave.com/wp/wp1939182.jpg"
            />
             <p className="pppppppppp">
            {" "}
            Reserveout is easy to use and reservations are instantly confirmed in real-time.
          </p>
        </div>

<div>
<link
        rel="stylesheet"
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      ></link>
      <link
        href="http://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
        type="text/css"
      ></link>

      <footer class="footer-distributed" id="contact">
        <div class="footer-left">
        
          <p class="footer-links">
            <a href="/">Home</a>
            .<a href="/restaurants">Resturant</a>.
            <a href="/logIn">LogIn</a>
          </p>

          <p class="footer-company-name">Hackers TEAM &copy; 2021</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>JORDAN</span> AMMAN
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+962787878787</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="">Test</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the website</span>
            Browse, discover and reserve the best restaurants anytime and from any device. Reserveout is easy to use and reservations are instantly confirmed in real-time. Your next table reservation is a click away!
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};
export default Home;
