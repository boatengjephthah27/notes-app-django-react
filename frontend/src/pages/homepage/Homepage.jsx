import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/notepost/Posts";
import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Posts />
    </div>
  );
};

export default Homepage;
