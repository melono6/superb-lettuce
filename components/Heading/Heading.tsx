import React from "react";
import SbEditable from "storyblok-react";
import styleNames from "../../utilities/style-names";
import Grid from "../Grid/Grid";
import styles from "../Heading/Heading.module.scss";

export type HeadingProps = {
  component: string;
  HeadingSize: string;
  FontWeight?: string;
  HeadingTitle: string;
  _uid: string;
  theme?: string;
};

export const Heading = (props: { content: HeadingProps }) => {
  const { content } = props;
  const { HeadingSize, FontWeight, HeadingTitle, theme, component } = {
    ...content,
  };
  const isPageHeading = component === "PageHeading";
  const isLarge = HeadingSize === "Large";
  const headerStyles = isLarge && "Heading__Large";
  const HeadingType = isPageHeading ? "h1" : "h2";
  const isLeftAlign = theme === "left-align";
  const alignStyles = isLeftAlign && "Heading__LeftAlign";
  const isBold = FontWeight === "Bold";
  const fontWeightStyles = isBold && "Heading__FontBold";
  return (
    <SbEditable content={content}>
      <header
        className={styleNames(styles, [
          "Heading",
          headerStyles,
          alignStyles,
          fontWeightStyles,
        ])}
      >
        <Grid row>
          <Grid column sm={12}>
            <HeadingType className={styles.HeadingTitle}>
              <span className={styles.Diamond} />
              <span className={styles.Title}>{HeadingTitle}</span>
              <span className={styles.Diamond} />
            </HeadingType>
          </Grid>
        </Grid>
      </header>
    </SbEditable>
  );
};
export default Heading;
