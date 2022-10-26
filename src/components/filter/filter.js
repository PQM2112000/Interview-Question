import React, { useState } from "react";
export default function Filter() {
  const [select, setSelect] = useState();
  localStorage.setItem("filter", select);
  return (
    <div className="filter">
      <button className="btn-filter" onClick={(e) => {}}>
        Filter
      </button>

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
