import React from "react";
import "./css/style.css";
import Search from "./component/Search.js";
import Pagination from "./component/pagination.js";
import Stories from './component/Stories'
import Filter from "./component/Filter";


function App() {
  return (
    <div className="app">
      <div className="app-upper-content">
        <Filter/>
        <Pagination />
        <Search/>
      </div>
      <Stories />
    </div>
  );
}

export default App;
