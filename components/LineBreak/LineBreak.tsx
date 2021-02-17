import React from "react";
import styleNames from "../../utilities/style-names";
import Grid from "../Grid/Grid";
import styles from "../LineBreak/LineBreak.module.scss";

export type LineBreakProps = {
  Style?: string;
  ColourScheme?: string;
};

export const LineBreak = (props: { content: LineBreakProps }) => {
  const { content } = props;
  const { Style, ColourScheme } = { ...content };
  const colourStyle =
    ColourScheme === "Black" ? "ThemeWrapper__Black" : "ThemeWrapper__Orange";
  const themeStyle =
    Style === "Line" ? "ThemeWrapper__Line" : "ThemeWrapper__Diamond";

  return (
    <div className={styles.Wrapper}>
      <Grid>
        <Grid column sm={12}>
          <div
            className={styleNames(styles, [
              "ThemeWrapper",
              themeStyle,
              colourStyle,
            ])}
          >
            <hr className={styles.LineBreak} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default LineBreak;
