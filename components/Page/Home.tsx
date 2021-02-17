import React from "react";
import Components from "../__Components__/Components";
import SbEditable from "storyblok-react";

export const Home = (props) => {
  const { Header, Body } = props.content;

  return (
    <SbEditable content={props.content}>
      <main>
        {Header && <>{Header.map((blok) => Components(blok))}</>}
        {Body && <>{Body.map((blok) => Components(blok))}</>}
      </main>
    </SbEditable>
  );
};
export default Home;
