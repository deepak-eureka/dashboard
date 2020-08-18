import React from "react";

export const Home = (props) => (
  <div className="sub-home headings">
    <h1 className="headings">Welcome to the World of IT</h1>
    <img
      style={{ width: "50%" }}
      src={require("../assets/homepage.png")}
      alt=""
    ></img>
    <div className="btn">
      Resume :<button>Course </button>
      <button>Project </button>
    </div>
  </div>
);
