import React from "react";

function SocialLink(props) {
  const { link, icon } = props;
  return (
    <li>
      <a href={link} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default SocialLink;
