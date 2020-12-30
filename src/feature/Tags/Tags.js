import React, { useEffect, useState } from "react";
import { baseFontSize, baseFontUnit } from "../../utils/Utils";
import styles from "./Tags.module.css";

const Tags = (props) => {
  const { state } = props.location;
  const [fontsUpdatedMapping, setFontsUpdatedMapping] = useState(null);
  useEffect(() => {
    fontStyles(state);
  }, [state]);

  const fontStyles = (state) => {
    debugger;
    const { wordsObject } = state.tags;
    const baseFont = baseFontSize;
    let withNewFont = Object.fromEntries(
      Object.entries(wordsObject).map(([key, value]) => [key, value * baseFont])
    );
    setFontsUpdatedMapping(withNewFont);
  };

  const fontSize = (fontSize) => {
    let size;
    switch (true) {
      case fontSize > 0 && fontSize <= 200:
        // code block
        size = 20;
        break;
      case fontSize > 201 && fontSize <= 400:
        // code block
        size = 30;
        break;
      case fontSize > 401 && fontSize <= 600:
        // code block
        size = 40;
        break;
      case fontSize > 601 && fontSize <= 800:
        // code block
        size = 50;
        break;
      case fontSize > 801 && fontSize <= 1000:
        // code block
        size = 60;
        break;
      case fontSize > 1001 && fontSize <= 1200:
        // code block
        size = 70;
        break;
      case fontSize > 1201 && fontSize <= 1400:
        // code block
        size = 80;
        break;
      case fontSize > 1401 && fontSize <= 1600:
        // code block
        size = 90;
        break;
      case fontSize > 1601 && fontSize <= 1800:
        // code block
        size = 100;
        break;
      case fontSize > 1801 && fontSize <= 2000:
        // code block
        size = 110;
        break;
      case fontSize > 2001 && fontSize <= 2200:
        // code block
        size = 120;
        break;
      default:
        size = 50;
    }
    return size;
  };

  return (
    <div className={styles.Tags}>
      <ul className={styles.Wrap}>
        {fontsUpdatedMapping &&
          Object.keys(fontsUpdatedMapping).map((val) => {
            return (
              <li
                style={{
                  fontSize: fontSize(fontsUpdatedMapping[val]),
                  color:
                    "#" + Math.floor(Math.random() * 16777215).toString(16),
                  margin: "0 10px",
                }}
              >
                {val}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Tags;
