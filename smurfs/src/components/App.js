import React, { Component, useEffect } from "react";
import "./App.css";
import { getData, FETCH_SMURF_DATA_FAILURE } from "../actions";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import SmurfsList from "./SmurfsList.js";
function App(props) {
  useEffect(() => {
    props.getData();
  }, []);
  console.log(props, "props");
  return (
    <div className="App">
      <SmurfsList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(App);
