import React from "react";
import Navbar from "./navbar/page";
import CreateNote from "../components/createNote/page";

const Home: React.FC = () => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen">
      <Navbar />
      <CreateNote />
    </div>
  );
};

export default Home;
