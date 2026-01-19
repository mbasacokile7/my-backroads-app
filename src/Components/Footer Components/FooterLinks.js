import React from "react";

function FooterLink(props) {
  const { footerLink, footerTitle } = props;
  return (
    <li>
      <a href={footerLink} className="footer-link">
        {footerTitle}
      </a>
    </li>
  );
}

export default FooterLink;
