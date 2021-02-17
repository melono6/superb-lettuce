import React from "react";
import SbEditable from "storyblok-react";
import styleNames from "../../utilities/style-names";
import paywalUrl from "../../utilities/paywallUrl";
import ArticleSmallThumbnail from "./Small/ArticleSmallThumbnail";
import ArticleMediumThumbnail from "./Medium/ArticleMediumThumbnail";
import ArticleLargeThumbnail from "./Large/ArticleLargeThumbnail";
import styles from "../ArticleThumbnails/ThumbnailsWrapper.module.scss";

export type ThumbnailsWrapperProps = {
  _uid: string;
  component: string;
  Article?: ArticleProps[];
  PageLink?: PageLinkProps[];
  ReferenceOrManual?: "Reference" | "Manual";
};

type ArticleProps = {
  full_slug: string;
  tag_list: string[];
  content: {
    ArticleDate?: string;
    TeaserCopy?: string;
    title: string;
    HeroImage: {
      alt: string;
      filename: string;
    };
    _uid: string;
    Author?: string;
  };
};

type PageLinkProps = {
  ManualAuthor: string;
  ManualDate: string;
  ManualImage: {
    alt: string;
    filename: string;
  };
  ManualTeaserCopy: string;
  ManualTitle: string;
  ManualLink: {
    cached_url: string;
  };
  component: string;
  _uid: string;
};

export const ThumbnailsWrapper = (props: {
  content: ThumbnailsWrapperProps;
}) => {
  const { content } = props;
  const { Article, PageLink, ReferenceOrManual } = content || {};
  const isReference = ReferenceOrManual === "Reference";

  // Build the manual array
  let manualArray: any = [];
  PageLink?.map((item) => {
    const newObj = {
      content: {
        ArticleDate: item.ManualDate,
        TeaserCopy: item.ManualTeaserCopy,
        title: item.ManualTitle,
        HeroImage: item.ManualImage,
        Author: item.ManualAuthor,
        _uid: item._uid,
      },
      full_slug: item.ManualLink.cached_url,
      tag_list: [],
    };
    return manualArray.push(newObj);
  });
  const articleArray = isReference ? Article : manualArray;

  const isSmall = content.component === "ArticleSmallThumbnails";
  const isMedium = content.component === "ArticleMediumThumbnails";
  const isLarge = content.component === "ArticleLargeThumbnails";
  const wrapperStyle = isMedium
    ? "ThumbnailsWrapper__AlignStart"
    : isLarge
    ? "ThumbnailsWrapper__Large"
    : null;
  return (
    <SbEditable content={content}>
      <section
        className={styleNames(styles, ["ThumbnailsWrapper", wrapperStyle])}
      >
        {articleArray?.map((item: ArticleProps, index: number) => {
          const { content, full_slug, tag_list } = item;
          const { ArticleDate, TeaserCopy, title, HeroImage, _uid } = {
            ...content,
          };

          const articleUrl = paywalUrl(tag_list, full_slug);

          if (isSmall) {
            return (
              <ArticleSmallThumbnail
                date={ArticleDate}
                title={title}
                HeroImage={HeroImage}
                url={`/${articleUrl}`}
                key={_uid}
              />
            );
          }
          if (isMedium) {
            return (
              <ArticleMediumThumbnail
                copy={TeaserCopy}
                title={title}
                HeroImage={HeroImage}
                url={`/${articleUrl}`}
                key={_uid}
                index={index}
              />
            );
          }
        })}
        {isLarge && <ArticleLargeThumbnail article={articleArray} />}
      </section>
    </SbEditable>
  );
};
export default ThumbnailsWrapper;
