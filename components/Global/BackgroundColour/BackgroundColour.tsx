import React from "react";
import styleNames from "../../../utilities/style-names";
import styles from "../BackgroundColour/BackgroundColour.module.scss";

export type BackgroundColourProps = {
  colour: colours | string | undefined;
  children: any;
};

export const RelatedArticles = ({
  colour,
  children,
}: BackgroundColourProps) => {
  let wrapperStyles: string;
  switch (colour) {
    case "Peche":
      wrapperStyles = "Wrapper__Peche";
      break;
    case "Lemon":
      wrapperStyles = "Wrapper__Lemon";
      break;
    case "Lime":
      wrapperStyles = "Wrapper__Lime";
      break;
    case "Pearl":
      wrapperStyles = "Wrapper__Pearl";
      break;
    case "Salmon":
      wrapperStyles = "Wrapper__Salmon";
      break;
    case "Mushroom":
      wrapperStyles = "Wrapper__Mushroom";
      break;
    case "Stone":
      wrapperStyles = "Wrapper__Stone";
      break;
    default:
      wrapperStyles = "Wrapper__None";
  }
  return (
    <div className={styleNames(styles, ["Wrapper", wrapperStyles])}>
      {children}
    </div>
  );
};
export default RelatedArticles;
