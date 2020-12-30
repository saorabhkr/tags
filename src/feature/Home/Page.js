import React from "react";
import styles from "./Page.module.css";
import TextBox from "../../components/TextBox/TextBox";

const Page = () => {
  console.log("Many times");
  return (
    <div className={styles.Page}>
      <div className={styles.Wrap}>
        <TextBox />
      </div>
    </div>
  );
};

export default Page;
