import React from "react";

export const Home = (props) => (
  <div className="sub-home headings">
    <h1 className="headings">Welcome to the World of IT</h1>
    <img src={require("../assets/main.png")} alt=""></img>
    <div className="btn">
      Resume :<button>Course </button>
      <button>Project </button>
    </div>
  </div>
);
