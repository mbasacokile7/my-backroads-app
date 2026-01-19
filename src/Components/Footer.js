import React from "react";
import { footerLinks, socialLinks } from "../data";
import FooterLink from "./Footer Components/FooterLinks";
import FSocialLink from "./Footer Components/FSocialLink";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map((link) => {
          return (
            <FooterLink
              key={link.id}
              footerLink={link.href}
              footerTitle={link.text}
            />
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <FSocialLink key={link.id} link={link.href} icon={link.icon} />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
