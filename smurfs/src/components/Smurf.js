import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
  } from "shards-react";
  
  import React from "react";
  import './App.css';

  function Smurf(props) {
    return (
      <Card style={{ maxWidth: "400px" }}>
        <CardHeader>The Smurf</CardHeader>
        <CardImg
          width="200px"
          src="smurf.png"
        
        />
        <CardBody>
          <CardTitle>{props.smurf.name}</CardTitle>
          <p>{props.smurf.age} years old</p>
          <p>{props.smurf.height} tall</p>
        </CardBody>
      </Card>
    );
  }
  
  export default Smurf;