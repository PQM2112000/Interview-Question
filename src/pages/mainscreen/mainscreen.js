import React, { Component } from "react";
import "./mainscreen.css";
import Listcard from "../../components/listcard/listcard";
import Filter from "../../components/filter/filter"
import Toppings from "../../components/Toppings/toppings"
export default class Mainscreen extends Component {
  render() {
    return (
      <div className="main-screen">
        <div className="tilte-main-screen">Store Menu</div>
        <Filter />
        <Toppings />
        <Listcard />
      </div>
    );
  }
}
