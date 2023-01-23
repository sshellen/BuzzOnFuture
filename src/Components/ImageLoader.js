import React, { Suspense, lazy } from "react";
import Loader from "./Loader";

const ImageLoader = ({ name }) => {
  return <img src={`/svg/${name}.svg`} />;
};

export default ImageLoader;
