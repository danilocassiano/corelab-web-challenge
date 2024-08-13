import React from "react";
import Navbar from "./navbar/page";

const Home: React.FC = () => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen">
      <Navbar />
      <h1 className="text-white">To do List</h1>
    </div>
  );
};

export default Home;
