import React from "react";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Blog from "./Components/Blog.js";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  return <div>{uuidv4()}</div>;
};

export default App;
