import React from "react";
import Navbar from "./navbar/page";
import CreateNote from "../components/createNote/page";
import PainelNote from "./note/page";

const Home: React.FC = () => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen overflow-auto"> 
      <Navbar />
      <CreateNote />
      <PainelNote />
    </div>
  );
};

export default Home;
