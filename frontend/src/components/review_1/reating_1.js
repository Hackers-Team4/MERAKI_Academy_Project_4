import axios from "axios";
import { React, useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Rating_1 = (props) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [text, setText] = useState("");
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  //console.log("aaaaaaaa",props. userDetails)
  //console.log("kkkkkk",props.restaurantDetails)
  const handleClick = (value) => {
    setCurrentValue(value);
    //console.log(currentValue)
  };
  const reviewBtn = () => {
    axios
      .post("http://localhost:5000/review", {
        rating: currentValue,
        comment: text,
        user: props.userDetails._id,
        restaurant: props.restaurantDetails._id,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      <h2> give us you feedback </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {text}
      {currentValue}
      <button onClick={reviewBtn} style={styles.button}>
        Submit
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Rating_1;
