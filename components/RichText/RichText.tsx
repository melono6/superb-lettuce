import React from "react";
import SbEditable from "storyblok-react";
import Link from "next/link";
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer";
import Grid from "../Grid/Grid";
import styles from "../RichText/RichText.module.scss";

export type RichTextProps = {
  RichText: {};
  _uid: string;
  component: string;
};

const RichTextRender = ({ document }) => {
  return (
    <div className={styles.RichText}>
      {render(document, {
        markResolvers: {
          [MARK_LINK]: (children: any, props: any) => {
            const { href, target, linktype } = props;
            if (linktype === "email") {
              return <a href={`mailto:${href}`}>{children}</a>;
            }
            if (href.match(/^(https?:)?\/\//)) {
              return (
                <a href={href} target={target}>
                  {children}
                </a>
              );
            }
            return (
              <Link href={href} passHref>
                <a>{children}</a>
              </Link>
            );
          },
        },
      })}
    </div>
  );
};

export const RichText = (props: { content: RichTextProps }) => {
  const { content } = props;
  return (
    <SbEditable content={content}>
      <section className={styles.Wrapper}>
        <Grid justify="center">
          <Grid column sm={12} md={8}>
            <RichTextRender document={content.RichText} />
          </Grid>
        </Grid>
      </section>
    </SbEditable>
  );
};
export default RichText;
