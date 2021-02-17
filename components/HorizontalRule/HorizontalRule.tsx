import React from "react";
import styleNames from "../../utilities/style-names";
import styles from "../HorizontalRule/HorizontalRule.module.scss";

export const HorizontalRule = ({ theme = "primary" }) => {
  const isPrimary = theme === "primary";
  const WrapperStyle = isPrimary ? "Wrapper__Primary" : "Wrapper__Secondary";
  const horizontalRuleStyle = isPrimary
    ? "HorizontalRule__Primary"
    : "HorizontalRule__Secondary";
  return (
    <div className={styleNames(styles, ["Wrapper", WrapperStyle])}>
      <hr
        className={styleNames(styles, ["HorizontalRule", horizontalRuleStyle])}
      />
    </div>
  );
};
export default HorizontalRule;
