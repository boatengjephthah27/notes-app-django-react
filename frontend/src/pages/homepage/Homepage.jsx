import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/notepost/Posts";
import "./homepage.css";

const getapi = "http://127.0.0.1:8000";

const Homepage = () => {
  const [data, setdata] = useState([]);

  const getAllPost = async () => {
    const response = await fetch(`${getapi}/post/`);

    const output = await response.json();

    if (response.ok) {
      setdata(output);
      console.log(data);
    } else {
      console.log("Failed");
    }
  };

  const deleteitem = async (noteId) => {
    const response = await fetch(`${getapi}/post/${noteId}/`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(noteId);
    } else {
      console.log("Failed");
    }

    getAllPost();
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div>
      <Navbar showall={getAllPost} />
      <div className='container'>
        <Posts data_={data} delitem={deleteitem} />
      </div>
    </div>
  );
};

export default Homepage;
