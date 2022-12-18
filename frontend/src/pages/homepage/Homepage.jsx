import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/notepost/Posts";
import "./homepage.css";

// const getapi = "http://127.0.0.1:8000";

const Homepage = (props) => {
  // const [data, setdata] = useState([]);

  // const getAllPost = async () => {
  //   const response = await fetch(`${getapi}/post/`);

  //   const output = await response.json();

  //   if (response.ok) {
  //     setdata(output);
  //     console.log(data);
  //   } else {
  //     console.log("Failed");
  //   }
  // };

  // const deleteitem = async (noteId) => {
  //   const response = await fetch(`${getapi}/post/${noteId}/`, {
  //     method: "DELETE",
  //   });

  //   if (response.ok) {
  //     console.log(noteId);
  //   } else {
  //     console.log("Failed");
  //   }

  //   getAllPost();
  // };

  // useEffect(() => {
  //   getAllPost();
  // }, []);

  return (
    <div>
      <Navbar showall={props.getAllPost} />
      <div className='contain'>
        <Posts data_={props.data} delitem={props.deleteitem} />
      </div>
    </div>
  );
};

export default Homepage;
