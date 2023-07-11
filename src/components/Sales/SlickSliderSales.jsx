import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickSliderSales = (props) => {
  return <Slider {...props.settings}>{props.children}</Slider>;
};

export default SlickSliderSales;