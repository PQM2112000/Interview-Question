import React, { Component } from "react";
import "./mainscreen.css";
import { Products } from "../data/Products";
export default class Mainscreen extends Component {
  render() {
    return (
      <div className="main-screen">
        <div className="tilte-main-screen">Store Menu</div>

        <div className="filter">
          <button className="btn-filter">Filter</button>
          <div className="sortby">
            <span className="label-sortby">SortBy </span>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Name (Asc)</option>
              <option value="1">Name (Dsc)</option>
              <option value="2">Price (Asc)</option>
              <option value="3">Price (Dsc)</option>
            </select>
          </div>
        </div>

        <div className="topping">
          <p>Toppings:</p>
          <div class="row">
            <div className="col-sm form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Milk Foam
              </label>
            </div>
            <div className="col-sm form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Milk Foam
              </label>
            </div>
            <div className="col-sm form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Milk Foam
              </label>
            </div>
          </div>
          <div class="row">
            <div className="col-sm form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Milk Foam
              </label>
            </div>
            <div className="col-sm form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Milk Foam
              </label>
            </div>
            <div className="col-sm form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Milk Foam
              </label>
            </div>
          </div>
        </div>

        <div className="list-card">
          {Products.products.map((p) => (
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
          ))};
        </div>

      </div>
    );
  }
}
