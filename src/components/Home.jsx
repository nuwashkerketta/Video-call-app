import React, { useState } from "react";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const navigateTo = useNavigate();
  const handleJoin = () => {
    navigateTo(`/room/${value}`);
  };

  return (
    <>
      <Hero />
      <div className="container">
        <h1>Join Meeting</h1>
        <div>
          <input
            type="text"
            placeholder="Create Meeting Id"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button disabled={!value} onClick={handleJoin}>
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
