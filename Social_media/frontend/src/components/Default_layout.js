import React from "react";
import '../styles/main.css';
import './Default_layout.css';

function DefaultLayout(props) {
  return (
    <div className="layout">
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
