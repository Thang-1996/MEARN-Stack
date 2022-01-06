import React from "react";
import "./MainHeader.css";
const MainHeader = (props) => {
  return (
    <header className="main-header">
      {
        // props childen la nhung thu se render o day
        props.children
      }
    </header>
  );
};
export default MainHeader;
