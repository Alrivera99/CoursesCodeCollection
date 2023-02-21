import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col,Pagination } from "antd";
import Grid from "./components/Grid";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=700&offset=0").then((response) => {
      setData(response.data.results);
    });
  }, []);

  return (
    <>
    
      <div className="grid-space">
        <Row>
          {data.map((value) => (
            <>
              <Grid nombre={value.name} />
            </>
          ))}
        </Row>
      </div>
    </>
  );
}

export default App;
