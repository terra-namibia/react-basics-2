import React from "react";

const ColorfulMessage = (props) => {
  console.log("ColorfulMessageをレンダリング");

  const {color, message, children} = props;
  const contentStyle = {
    color: color,
    fontSize: '18px'
  };
  return <p style={contentStyle}>{message + children}</p>;
}

export default ColorfulMessage;
