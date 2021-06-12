import axios from "axios";
import { React, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./review.css"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Starts = (props) => {

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  useEffect(() => {
    setCurrentValue(props.starts)
  }, [])

  return (
    <div style={styles.container}>

      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              // onClick={() =>{setCurrentValue(props.starts)}}
              // onScroll={() => handleClick(4)}
              //  onMouseOver={() => handleMouseOver(index + 1)}
              // onMouseLeave={handleMouseLeave}
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

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "4% 0 0 -20%"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Starts;
