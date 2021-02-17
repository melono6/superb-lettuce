import React from "react";
import Components from "../__Components__/Components";
import SbEditable from "storyblok-react";
import styles from "./Page.module.scss";

const Dots = () => (
  <div className={styles.IntroWrapper}>
    <div className={styles.DotWrapper}>
      <span className={styles.IntroDot} />
    </div>
    <div className={styles.DotWrapper}>
      <span className={styles.IntroDot} />
    </div>
    <div className={styles.DotWrapper}>
      <span className={styles.IntroDot} />
    </div>
  </div>
);

export const Page = (props) => {
  const { Header, body } = props.content;
  return (
    <SbEditable content={props.content}>
      <main>
        <Dots />
        {Header && <>{Header.map((blok) => Components(blok))}</>}
        {body && (
        <>
          {body.map((blok) => Components({
            component: blok.sys.contentType.sys.id,
            ...blok.fields
          }))}
        </>)}
      </main>
    </SbEditable>
  );
};
export default Page;
