import React from "react";
import SbEditable from "storyblok-react";
import searchStyles from "../SearchResults/SearchResults.module.scss";

export const Page = ({ content }) => {
  const { MemberContentWarning } = content;

  return (
    <SbEditable content={content}>
      <main>
        <div className={searchStyles.NoResults}>
          {MemberContentWarning}
        </div>
      </main>
    </SbEditable>
  );
};
export default Page;
