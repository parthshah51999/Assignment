import React from "react";

const onCircleClick = index => {
  alert(`Index of the circle is :: ${index + 1}`);
};

const Circle = props => {
  const { circlePositions } = props;
  return (
    <div>
      {circlePositions.map((value, index) => {
        const divStyle = {
          position: "absolute",
          left: value.xpos,
          top: value.ypos
        };
        return (
          <div
            className="circle"
            onClick={() => onCircleClick(index)}
            style={divStyle}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Circle;
