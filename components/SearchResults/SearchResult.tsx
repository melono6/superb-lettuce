import React from "react";
import Link from "next/link";
import styles from "./SearchResult.module.scss";
import Image from "../Image/Image";
import { format } from "../../utilities/dateFormat";
import paywallUrl from "../../utilities/paywallUrl";

export type SearchResultProps = {
  title: string;
  image: string;
  TeaserCopy: string;
  ArticleDate: string;
  full_slug: string;
  tag_list: string[];
};

export const SearchResult = ({ content, resultIndex, saveScroll }: { content: SearchResultProps, resultIndex: number, saveScroll: Function }) => {
  const {
    title,
    image,
    TeaserCopy: teaserCopy,
    ArticleDate: articleDate,
    full_slug,
    tag_list,
  } = content;

  const articleUrl = paywallUrl(tag_list, full_slug);

  return (
    <div className={styles.SearchResult}>
      <div className={styles.Image}>
        <Image src={image} alt={title} width={104} height={104} />
      </div>
      <div>
        <h3 className={styles.Title} onMouseEnter={(() => {
          saveScroll(resultIndex);
        })}>
          <Link href={`/${articleUrl}`}>
            <a className={styles.TitleLink}>{title}</a>
          </Link>
        </h3>
        <p className={styles.Teaser}>{teaserCopy}</p>
        {articleDate && (
          <time className={styles.Date} dateTime={format(articleDate)}>
            {format(articleDate)}
          </time>
        )}
        <div className={styles.Line}></div>
      </div>
    </div>
  );
};
export default SearchResult;
