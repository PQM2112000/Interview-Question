import React, { Component } from "react";
import "./sidebar.css";
import { Stores } from "../data/stores";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="title-sidebar">Mile Tea Store</div>
        {Stores.stores.map((s) => (
          <div id="list" class="listgroup">
            <p className="NameStore">{s.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
