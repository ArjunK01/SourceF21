import React, { useState, useEffect } from "react";
import axios from "axios";

const Counter = () => {
  let [agePrediction, setAgePrediction] = useState("");

  //   setTimeout(() => setCount(count + 1), 50);

  //function with 2 parameters
  //First parameter is a function you want to run
  //Second paramter is an empty array to signify only running on the first render
  useEffect(() => {
    //Code you want to run here
    //Fetch the data from an api
    axios.get("https://api.agify.io/?name=arjun").then(prediction => {
      setAgePrediction(prediction.data.age);
    });
  }, []);

  return <div>{agePrediction}</div>;
};

export default Counter;
