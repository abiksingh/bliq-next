import React from "react";
import styles from "./NoServiceAvailable.module.css";
import warningIcon from "../../public/warning.png";
import Image from "next/image";

const NoServiceAvailable: React.FC = () => {
  return (
    <div className={styles.noServiceContainer}>
      <Image src={warningIcon} alt="Warning" className={styles.warningIcon} />
      <p>Service is currently not available. Please try again later!</p>
    </div>
  );
};

export default NoServiceAvailable;
