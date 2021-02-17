import React from "react";
import SbEditable from "storyblok-react";
import Grid from "../Grid/Grid";
import styles from "../PullQuote/PullQuote.module.scss";

export type PullQuoteProps = {
  PullQuote: {};
  _uid: string;
  component: string;
  Author: string | null;
  Quote: string;
};

export const PullQuote = ({ content }: { content: PullQuoteProps }) => {
  const { Quote, Author } = { ...content };

  return (
    <SbEditable content={content}>
      <section className={styles.Wrapper}>
        <Grid justify="center">
          <Grid column sm={12} md={8}>
            <div className={styles.QuoteContainer}>
              <p className={styles.Quote}>{Quote}</p>
            </div>
            {Author && <p className={styles.QuoteAuthor}>{Author}</p>}
          </Grid>
        </Grid>
      </section>
    </SbEditable>
  );
};

export default PullQuote;
