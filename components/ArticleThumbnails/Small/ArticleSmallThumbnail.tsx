import React from "react";
import Link from "next/link";
import styleNames from "../../../utilities/style-names";
import Image from "../../Image/Image";
import { format } from "../../../utilities/dateFormat";
import styles from "../Small/ArticleSmallThumbnail.module.scss";

type ArticleProps = {
  url: string;
  date?: string;
  title: string;
  HeroImage: {
    filename: string;
    alt: string;
  };
  theme?: "primary" | "nested";
};

export const ArticleSmallThumbnail = ({
  url,
  date,
  title,
  HeroImage,
  theme = "primary",
}: ArticleProps) => {
  const isPrimary = theme === "primary";
  const articleStyle = isPrimary
    ? "ArticleSmallThumbnail__Primary"
    : "ArticleSmallThumbnail__Nested";
  const { filename, alt } = { ...HeroImage };
  return (
    <article
      className={styleNames(styles, ["ArticleSmallThumbnail", articleStyle])}
    >
      <div className={styles.ImageWrapper}>
        <Image src={filename} alt={alt} width={104} height={104} isSmart />
      </div>
      <div className={styles.CopyWrapper}>
        <p className={styles.Title}>
          <Link href={url} passHref>
            <a className={styles.TitleLink}>{title}</a>
          </Link>
        </p>
        {date && (
          <time dateTime={format(date)} className={styles.Date}>
            {format(date)}
          </time>
        )}
      </div>
    </article>
  );
};

export default ArticleSmallThumbnail;
