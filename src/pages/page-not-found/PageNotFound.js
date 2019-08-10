import React from "react";
import {Link} from 'react-router-dom';

import img404 from '../../assets/404.png';
import "./page-not-found.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <img className="img-404" src={img404} alt="404 not found"/>
      <Link to="/">Click here to get back to home</Link>
    </div>
  );
};

export default PageNotFound;