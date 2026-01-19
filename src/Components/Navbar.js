import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import NavLink from "./Nav Components/NavLink";
import SocialLink from "./Nav Components/SocialLinks";

// JSX

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* -- left this comment on purpose -- */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <NavLink key={link.id} link={link.href} linkText={link.text} />
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((sl) => {
            return <SocialLink key={sl.id} link={sl.href} icon={sl.icon} />;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
