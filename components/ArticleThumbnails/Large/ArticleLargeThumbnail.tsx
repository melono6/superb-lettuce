import React from "react";
import Link from "next/link";
import paywalUrl from "../../../utilities/paywallUrl";
import Grid from "../../Grid/Grid";
import Image from "../../Image/Image";
import ArticleSmallThumbnail from "../Small/ArticleSmallThumbnail";
import styles from "../Large/ArticleLargeThumbnail.module.scss";

type HeroArticleProps = {
  url: string;
  Author?: string;
  title: string;
  HeroImage: {
    filename: string;
    alt: string;
  };
  TeaserCopy?: string;
  _uid?: string;
};

type ArticleItemProps = {
  content: HeroArticleProps;
  full_slug: string;
  tag_list: string[];
};

export const ArticleLargeThumbnail = ({ article }) => {
  return (
    <div className={styles.ArticleLargeThumbnail}>
      <Grid row>
        <Grid column sm={12} md={7}>
          {article?.map((articleItem: ArticleItemProps, index: number) => {
            const isFirst = index === 0;
            if (isFirst) {
              const { content, full_slug, tag_list } = articleItem;
              const { TeaserCopy, title, HeroImage, Author, _uid } = {
                ...content,
              };

              const articleUrl = paywalUrl(tag_list, full_slug);

              return (
                <HeroArticle
                  key={_uid}
                  TeaserCopy={TeaserCopy}
                  title={title}
                  HeroImage={HeroImage}
                  Author={Author}
                  url={`/${articleUrl}`}
                />
              );
            }
          })}
        </Grid>
        <Grid column sm={12} md={5}>
          {article?.map((articleItem: ArticleItemProps, index: number) => {
            const isFirst = index === 0;
            if (!isFirst) {
              const { content, full_slug, tag_list } = articleItem;
              const { title, HeroImage, _uid } = { ...content };

              const articleUrl = paywalUrl(tag_list, full_slug);
              return (
                <ArticleSmallThumbnail
                  key={_uid}
                  title={title}
                  HeroImage={HeroImage}
                  theme="nested"
                  url={`/${articleUrl}`}
                />
              );
            }
          })}
        </Grid>
      </Grid>
    </div>
  );
};

const HeroArticle = ({
  url,
  TeaserCopy,
  Author,
  title,
  HeroImage,
}: HeroArticleProps) => {
  const { filename, alt } = { ...HeroImage };
  return (
    <article className={styles.ArticleHeroThumbnail}>
      <div className={styles.ImageWrapper}>
        <Image src={filename} alt={alt} width={702} height={258} isSmart />
      </div>
      <div className={styles.CopyWrapper}>
        <p className={styles.Title}>
          <Link href={url} passHref>
            <a className={styles.TitleLink}>{title}</a>
          </Link>
        </p>
        <p className={styles.TeaserCopy}>{TeaserCopy}</p>
        {Author && <cite>By {Author}</cite>}
      </div>
    </article>
  );
};

export default ArticleLargeThumbnail;
