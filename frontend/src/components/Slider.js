import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Slider.css";
const slideImages = [
'https://images.all-free-download.com/images/graphicthumb/restaurant_sign_194853.jpg',
"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
"https://www.hotelvistabella.com/img/imgHome/1_273.jpg",
"https://casapacha.com/sites/formentera/files/2021-05/r%20CP-Web%20Desktop-Photos%20Selection_1920x1080_Restaurant%202.jpg"
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="imageSlider" style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow