import React, { Component } from 'react'
import './mainscreen.css'
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
export default class Mainscreen extends Component {
  render() {
    return (
      <div className="main-screen">
        <div className="tilte-main-screen">Store Menu</div>
        <div className="filter">
          <button className="btn-filter">Filter</button>
          <div className="sortby">
            <span className="label-sortby">SortBy</span>
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
          <div className="card col-sm">
            <div className="content-card">
              <div className="header-content">
                <div className="code-item">MT-01</div>
                <div className="name-item">Royal milk tea</div>
              </div>
              <hr style={{ border: "3px 0 solid" }} />
              <div className="footer-content">
                <div className="title-footer-content"> Toppings:</div>
                <div className="category-topping">Milk foam, white pear</div>
              </div>
            </div>
            <div className="footer-card">
              <div className="trending">Trending</div>
              <div className="cost">$4.8</div>
            </div>
          </div>

          <div className="card col-sm">
            <div className="content-card">
              <div className="header-content">
                <div className="code-item">MT-01</div>
                <div className="name-item">Royal milk tea</div>
              </div>
              <hr style={{ border: "3px 0 solid" }} />
              <div className="footer-content">
                <div className="title-footer-content"> Toppings:</div>
                <div className="category-topping">Milk foam, white pear</div>
              </div>
            </div>
            <div className="footer-card">
              <div className="trending">Trending</div>
              <div className="cost">$4.8</div>
            </div>
          </div>

          <div className="card col-sm">
            <div className="content-card">
              <div className="header-content">
                <div className="code-item">MT-01</div>
                <div className="name-item">Royal milk tea</div>
              </div>
              <hr style={{ border: "3px 0 solid" }} />
              <div className="footer-content">
                <div className="title-footer-content"> Toppings:</div>
                <div className="category-topping">Milk foam, white pear</div>
              </div>
            </div>
            <div className="footer-card">
              <div className="trending">Trending</div>
              <div className="cost">$4.8</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
