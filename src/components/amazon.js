import React, { useEffect, useState } from "react";
import Cards from "./card";
import "../styles/amazon.css";
import axios from 'axios';
import Header from "./Header/Header";

const Amazon = ({ handleClick }) => {

  const [cover, setCover] = useState([]);

  const background = async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=9');
    console.log(response.data);
    setCover(response.data)
  }

  useEffect(() => {
    background()
  }, []);

  return (
  <>
    <Header/>
    <section>
      {cover.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    </>
  );
};

export default Amazon;
