import React from "react";

import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import ConfigBar from "./ConfigBar";

function Header() {
  return (
    <div>
      <ConfigBar />
      <SearchBar />
      <Navbar />
    </div>
  );
}

export default Header;
