import React from "react";

//Define the NavLink Component as function
//Use props to pass in the data
function NavLink(props) {
  // Destructure the props object with the relevant required data
  const { link, linkText } = props;
  return (
    <li>
      <a href={link} className="nav-link">
        {" "}
        {linkText}{" "}
      </a>
    </li>
  );
}

export default NavLink;
