import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setData(response.data.results);
    });
  }, []);

  return (
    <>
      {
        data.map((value) => ( 
          <>
            <h1>{value.name}</h1>
          </>
        ))}
    </>
  );
};

export default Api;
