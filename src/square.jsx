import React, { useState } from "react";
import _ from "lodash";
import Circle from "./circle";

const createCirclePositions = () => {
  const cPos = [];
  for (let i = 0; i < numOfCircles; i++) {
    const pushObj = {
      xpos: _.random(50, 1000),
      ypos: _.random(50, 350)
    };
    cPos.push(pushObj);
  }
  return cPos;
};

const numOfCircles = 4;
const [circlePositions, useCirclePos] = useState(createCirclePositions());

const Square = () => {
  return (
    <div className="square">
      <Circle circlePositions={circlePositions} />
    </div>
  );
};

export default Square;
