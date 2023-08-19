import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import React from "react";


function Homepage() {
  function ra(){
    window.alert("keep clicking 3la tsawer ya tefla");

  }



  return (
    <div >
      <Link onClick={ra} style={{textDecoration: 'none'}} to="/Maria">Click if you are Ghofrane</Link>
      
    </div>
  );
}

export default Homepage;