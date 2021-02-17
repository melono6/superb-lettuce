import React from "react";
import SbEditable from "storyblok-react";
import ReactHtmlParser from "react-html-parser";
import { useInView } from "react-hook-inview";
import Grid from "../Grid/Grid";
import styles from "../Embed/Embed.module.scss";

export type EmbedProps = {
  Embed: {};
  _uid: string;
  component: string;
  EmbedCode: string;
};

export const Embed = ({ content }: { content: EmbedProps }) => {
  const { EmbedCode } = { ...content };
  const parsed = ReactHtmlParser(EmbedCode);
  const [embedRef, isVisible] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });
  return (
    <SbEditable content={content}>
      <section className={styles.Wrapper}>
        <Grid justify="center">
          <Grid column sm={12} md={8}>
            <div ref={embedRef} className={styles.IframeContainer}>
              {isVisible && parsed}
            </div>
          </Grid>
        </Grid>
      </section>
    </SbEditable>
  );
};

export default Embed;
