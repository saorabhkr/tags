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

  return (
    <div className={styles.Tags}>
      <ul className={styles.Wrap}>
        {fontsUpdatedMapping &&
          Object.keys(fontsUpdatedMapping).map((val) => {
            return (
              <li
                style={{
                  fontSize: fontsUpdatedMapping[val] + baseFontUnit,
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
