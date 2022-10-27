import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Filter() {
  const [select, setSelect] = useState();
  localStorage.setItem("filter", select);
  return (
    <div className="filter">
      <Link to='/filter' className="btn-filter">
        Filter
      </Link>

      <div className="sortby">
        <span className="label-sortby">SortBy </span>
        <select
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="Prodts">Choose...</option>
          <option value="AscName">Name (Asc)</option>
          <option value="DscName">Name (Dsc)</option>
          <option value="AscPrice">Price (Asc)</option>
          <option value="DscPrice">Price (Dsc)</option>
        </select>
      </div>
    </div>
  );
}
