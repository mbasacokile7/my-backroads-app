import React from "react";

function FSocialLink(props) {
  const { link, icon } = props;
  return (
    <li>
      <a href={link} target="_blank" className="footer-icon">
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default FSocialLink;
