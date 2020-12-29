import React, { useState, useEffect } from "react";
import { uniqueObject, words } from "../../utils/Utils";
import styles from "./TextBox.module.css";
import { useHistory } from "react-router-dom";

const TextBox = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    // generateWordCloud();
  }, []);

  const generateWordCloud = (event) => {
    event.preventDefault();
    const wordCount = words(value);
    const wordsObject = uniqueObject(wordCount);
    const wordsTags = {
      count: wordCount,
      wordsObject: wordsObject,
    };
    routeChange(wordsTags);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const history = useHistory();

  const routeChange = (props) => {
    let path = `/tags`;
    history.push(path, {
      tags: props,
    });
  };

  return (
    <div className={styles.TextBox}>
      <div className={styles.Wrap}>
        <form onSubmit={generateWordCloud}>
          <h1>Please enter words!</h1>
          <textarea
            name="comment"
            cols="30"
            rows="10"
            className="Textarea"
            value={value}
            onChange={handleChange}
          ></textarea>
          <button className="submit">Generate!</button>
        </form>
      </div>
    </div>
  );
};

export default TextBox;
