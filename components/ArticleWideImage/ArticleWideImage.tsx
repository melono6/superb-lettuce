import React from "react";
import Link from "next/link";
import SbEditable from "storyblok-react";
import paywalUrl from "../../utilities/paywallUrl";
import Grid from "../Grid/Grid";
import Image from "../Image/Image";
import styles from "../ArticleWideImage/ArticleWideImage.module.scss";

export type ArticleWideImageProps = {
  _uid: string;
  component: string;
  Article?: ArticleArrayProps[];
  PageLink?: {
    cached_url: string;
  };
  ReferenceOrManual?: string;
  title: string;
  HeroImage: {
    alt: string;
    filename: string;
  };
  TeaserCopy: string;
  Author: string;
};

type ArticleArrayProps = {
  content: ArticleProps;
  full_slug?: string;
};

type ArticleProps = {
  title: string;
  HeroImage: {
    alt: string;
    filename: string;
  };
  _uid: string;
  TeaserCopy: string;
  Author: string;
  component?: string;
};

export const ArticleWideImage = (props: { content: ArticleWideImageProps }) => {
  const { content } = props;
  const {
    component,
    _uid,
    ReferenceOrManual,
    Author,
    HeroImage,
    TeaserCopy,
    title,
    Article,
    PageLink,
  } = content;
  const isReference = ReferenceOrManual === "Reference";

  // Creating an array with single manual input object
  const manualArray: ArticleArrayProps[] = [
    {
      content: {
        Author,
        HeroImage,
        TeaserCopy,
        component,
        title,
        _uid,
      },
      full_slug: PageLink?.cached_url,
    },
  ];

  const articleArray = isReference ? Article : manualArray;

  return (
    <SbEditable content={content}>
      <section className={styles.ArticleWideImage}>
        {articleArray?.map((item: ArticleArrayProps) => {
          const { content, full_slug = "", tag_list = [] } = { ...item };
          const {
            Author: ArticleAuthor,
            title: ArticleTitle,
            HeroImage: ArticleHeroImage,
            TeaserCopy: ArticleTeaserCopy,
            _uid,
          } = {
            ...content,
          };
          const { alt, filename } = { ...ArticleHeroImage };
          const articleUrl = paywalUrl(tag_list, full_slug);

          return (
            <article key={_uid} className={styles.ArticleWrapper}>
              <Grid row>
                <Grid column sm={12} md={4}>
                  <div className={styles.CopyWrapper}>
                    <h3 className={styles.Title}>
                      <Link
                        href={isReference ? `/${articleUrl}` : full_slug}
                        passHref
                      >
                        <a className={styles.TitleLink}>{ArticleTitle}</a>
                      </Link>
                    </h3>
                    <p className={styles.TeaserCopy}>{ArticleTeaserCopy}</p>
                    {ArticleAuthor && (
                      <cite className={styles.Author}>By {ArticleAuthor}</cite>
                    )}
                  </div>
                </Grid>
                <Grid column sm={12} md={8}>
                  <div className={styles.ImageWrapper}>
                    <Image
                      src={filename}
                      alt={alt}
                      width={806}
                      height={403}
                      isSmart
                    />
                  </div>
                </Grid>
              </Grid>
            </article>
          );
        })}
      </section>
    </SbEditable>
  );
};

export default ArticleWideImage;
