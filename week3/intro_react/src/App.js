import React from "react";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Blog from "./Components/Blog.js";

const App = () => {
  return (
    <div>
      <p class="paragraph"></p>
      <Header />
      <Body />
      <Blog title={"NY TRIP"} content={"This is the blog for NY"} likes={20} />
      <Blog 
      title={"SF TRIP"} 
      content={"Blog for SF"} 
      likes={2} />
    </div>
  );
};

export default App;
