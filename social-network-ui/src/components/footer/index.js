import React from 'react';
import './footer.scss';
function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li><a href="/about">Giới thiệu</a></li>
        <li><a href="/help">Trợ giúp</a></li>
        <li><a href="/privacy">Chính sách riêng tư</a></li>
        <li><a href="/terms">Điều khoản</a></li>
        <li><a href="/jobs">Việc làm</a></li>
        <li><a href="/contact">Liên hệ</a></li>
      </ul>
      <p>©2024 Panda Entertainment</p>
    </footer>
  );
}

export default Footer;
