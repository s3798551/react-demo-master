import React, { Component } from "react";
import { geolocated } from "react-geolocated";

import UserService from "../services/user.service";

export default class Home extends Component {

  state = {
    content: ""
  };

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    // return (
    //
    //   // <div className="container">
    //   //   <header className="jumbotron">
    //   //     <h1>Welcome to Greenii Delivery Service</h1>
    //   //   </header>
    //   // </div>
    // );

    // Check geolocation supported in
    // browser or not
    return this.props.isGeolocationAvailable ? (

        // Check location is enable in
        // browser or not
        this.props.isGeolocationEnabled ? (

            // Check coordinates of current
            // location is available or not
            this.props.coords ? (
                <div>
                  <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
                  <h3 style={{ color: "red" }}>
                    Current latitude and longitude of the user is
                  </h3>
                  <ul>
                    <li>latitude - {this.props.coords.latitude}</li>
                    <li>longitude - {this.props.coords.longitude}</li>
                  </ul>
                </div>
            ) : (
                <h1>Getting the location data</h1>
            )
        ) : (
            <h1>Please enable location on your browser</h1>
        )
    ) : (
        <h1>Please, update your or change the browser </h1>
    );
  }
}


