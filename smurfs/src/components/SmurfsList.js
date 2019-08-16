import React, { Component, useEffect } from "react";
import "./App.css";
import { getData, FETCH_SMURF_DATA_FAIL } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf.js";
import SmurfForm from "./Smurfs";
import Loader from "react-loader-spinner";

function SmurfsList(props) {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="container">
      <SmurfForm />
      <div className="smurf">
        {props.isLoading ? (
          <Loader type="Circles" color= '#1E90FF' height={80} width={80}/>
        ) : (
          ""
        )}
        {props.smurfs.map(smurf => (
          <Smurf smurf={smurf} />
        ))}
      </div>
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
)(SmurfsList);