import React from "react";

function SidebarBtn({ text, redirect, LogOut }) {
  return (
    <li>
      <button onClick={() => LogOut()}>
        <figure>
          <i></i>
        </figure>
        <div>{text}</div>
      </button>
    </li>
  );
}

export default SidebarBtn;
