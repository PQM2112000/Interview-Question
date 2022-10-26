import React, { useState } from "react";
import {
  AscName,
  AscPrice,
  DscName,
  DscPrice,
  Prodts,
  Products,
} from "../../data/Products";
export default function Listcard() {
  /* const [filt, setFilt] = useState(localStorage.getItem("filter"));
  console.log(localStorage.getItem("filter")); */
  return (
    <div className="list-card">
      {Prodts.map((p) => (
        <div className="card">
          <div className="content-card">
            <div className="header-content">
              <div className="code-item">MT-0{p.id}</div>
              <div className="name-item">{p.name}</div>
            </div>
            <div className="footer-content">
              <div className="title-footer-content"> Toppings:</div>
              <div className="category-topping">{p.toppings}</div>
            </div>
          </div>
          <div className="footer-card">
            <div className="trending">Trending</div>
            <div className="cost">${p.price}</div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
