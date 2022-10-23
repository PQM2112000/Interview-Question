import React, { Component } from 'react'
import './sidebar.css'
var stores = {
  stores: [
    {
      id: 1,
      name: "Ding Tea",
    },
    {
      id: 2,
      name: "Tocotoco",
    },
    {
      id: 3,
      name: "Gongcha",
    },
    {
      id: 4,
      name: "LeeTee",
    },
  ],
};

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='title-sidebar'>Mile Tea Store</div>
        {stores.stores.map((s) => (
          <div id="list" class="list-group">
            <a>{s.name}</a>
          </div>
        ))}
      </div>
    );
  }
}
