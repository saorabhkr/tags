import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Wrap}>
        <h2 className={styles.Logo}>
          <a href="javascript:void(0)">Website Logo</a>
        </h2>
        <nav className={styles.Navbar}>
          <ul className={styles.Menu}>
            <li>
              <a className={styles.Active} href="/">
                Home
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">About</a>
            </li>
            <li>
              <a href="javascript:void(0)">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
