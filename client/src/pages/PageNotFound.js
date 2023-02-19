import React from 'react';
import {Link} from 'react-router-dom';
import Home from "./Home";


export default function PageNotFound() {
  return (
    <div>
        <h1>Page Not Found</h1>
        <h3>Go To Home Page:  <Link to="/"> Home Page</Link></h3>
    </div>
  )
}
