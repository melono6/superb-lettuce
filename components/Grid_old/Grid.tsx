import React from "react";
import Components from "../__Components__/Components";
import SbEditable from "storyblok-react";

export const Grid = (props) => (
  <SbEditable content={props.content}>
    <div className="grid">
      {props.content.Columns.map((blok) => Components(blok))}
    </div>
  </SbEditable>
);
export default Grid;
