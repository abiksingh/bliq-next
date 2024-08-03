import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navbarBrand}>
          <a href="/" className={styles.navLink}>
            Bliq
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
