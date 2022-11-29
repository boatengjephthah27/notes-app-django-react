import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/notepost/Posts";
import AddNotePage from "../addnotepage/AddNotePage";
import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Posts />
      <AddNotePage />
    </div>
  );
};

export default Homepage;
