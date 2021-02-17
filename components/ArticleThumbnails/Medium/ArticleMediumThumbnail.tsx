import React from "react";
import Link from "next/link";
import Image from "../../Image/Image";
import styleNames from "../../../utilities/style-names";
import styles from "../Medium/ArticleMediumThumbnail.module.scss";

type ArticleProps = {
  url: string;
  copy?: string;
  title: string;
  HeroImage: {
    filename: string;
    alt: string;
  };
  index: number;
};

export const ArticleMediumThumbnail = ({
  url,
  copy,
  title,
  HeroImage,
  index,
}: ArticleProps) => {
  const isSecondImage = index === 1;
  const imageSize = isSecondImage ? 296 : 160;
  const wrapperStyle = isSecondImage && "ImageWrapper__Second";
  const { filename, alt } = { ...HeroImage };

  return (
    <article className={styles.ArticleMediumThumbnail}>
      <div className={styleNames(styles, ["ImageWrapper", wrapperStyle])}>
        <div className={styles.ImageAlign}>
          <Image
            src={filename}
            alt={alt}
            width={imageSize}
            height={imageSize}
            isSmart
          />
        </div>
      </div>
      <div className={styles.CopyWrapper}>
        <p className={styles.Title}>
          <Link href={url} passHref>
            <a className={styles.TitleLink}>{title}</a>
          </Link>
        </p>
        <p className={styles.TeaserCopy}>{copy}</p>
      </div>
    </article>
  );
};

export default ArticleMediumThumbnail;
