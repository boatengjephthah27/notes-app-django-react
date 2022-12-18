import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteContent from "./components/showcon/NoteContent";
import axios from "axios";

function App() {
  const getapi = "http://127.0.0.1:8000";
  const [data, setdata] = useState([]);

  const getAllPost = async () => {
    axios.get(`${getapi}/post/`).then((response) => {
      setdata(response.data);
    });
  };

  const deleteitem = async (noteId) => {
    axios.delete(`${getapi}/post/${noteId}/`).then(() => {
      getAllPost();
      alert(`Note Deleted!`);
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Homepage
              getAllPost={getAllPost}
              deleteitem={deleteitem}
              data={data}
            />
          }
        />
        <Route
          path='note/:id'
          element={<NoteContent getAllPost={getAllPost} getapi={getapi} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
