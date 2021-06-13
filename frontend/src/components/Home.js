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
      <div class="footer">
        <p>Copyright @ 2021 All Rights Reserved By <span className="shop2">Our<span >Restaurant</span></span></p>
    </div>
    </>
  );
};
export default Home;
