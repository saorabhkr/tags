import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Wrap}>
        <h2 className={styles.Logo}>
          <a href="#">Footer Logo</a>
        </h2>
        <nav className={styles.Navbar}>
          <ul className={styles.Menu}>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
