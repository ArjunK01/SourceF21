import React, { useEffect, useState } from "react";
import firestore from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let blogPosts = collection(firestore, "BlogPosts");
    getDocs(blogPosts).then(snapshot => {
      //Snapshots is just an array of all the documents in blog posts
      let tempPosts = [];

      snapshot.forEach(document => {
        tempPosts.push(document.data());
      });

      setBlogs(tempPosts);
    });
  }, []);

  return <div>{blogs.map(blog => JSON.stringify(blog))}</div>;
}

export default App;
