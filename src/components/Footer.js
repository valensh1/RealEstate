import React from 'react';
import TenXLogo from './TenXLogo';

function Footer() {
  return (
    <div id="footer-section">
      <div id="footer-content">
        <div id="footer-logo-trademark">
          <TenXLogo />
          <span>Exponentially better.</span>
          <span>© 2022 CoStar Group</span>
        </div>

        <div id="list1-property-types">
          <a href="">ALL PROPERTIES </a>
          <a href="">OFFICE</a>
          <a href="">MULTIFAMILY</a>
          <a href="">RETAIL</a>
          <a href="">HOTEL</a>
          <a href="">INDUSTRIAL</a>
          <a href="">OTHER</a>
        </div>

        <div id="ast2">
          <a href="">TEN-X DASHBOARD</a>
          <a href="">CAREERS</a>
          <a href="">ABOUT</a>
        </div>

        <div id="ast3-pages">
          <a href="">BROKERS</a>
          <a href="">SELLERS</a>
          <a href="">BUYERS</a>
        </div>

        <div id="ast4-contact-info">
          <a href="">CONTACT</a>
          <a href="">HELP CENTER</a>
          <a href="">(888) 770-7332</a>
          <a href="">MON-FRI 9AM-8PM ET</a>
        </div>
      </div>
      <div id="bottom-links">
        <a href="">Licensing</a>
        <a href="">Privacy</a>
        <a href="">CA Residents</a>
        <a href="">Terms of Use</a>
        <a href="">CA: Do Not Sell My Personal Info</a>
        <a href="">Participation Terms</a>
        <a href="">Sitemap</a>
      </div>
    </div>
  );
}

export default Footer;
