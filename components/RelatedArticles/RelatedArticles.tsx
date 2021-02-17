import React from "react";
import SbEditable from "storyblok-react";
import Link from "next/link";
import styleNames from "../../utilities/style-names";
import paywalUrl from "../../utilities/paywallUrl";
import Grid from "../Grid/Grid";
import Image from "../Image/Image";
import BackgroundColour from "../Global/BackgroundColour/BackgroundColour";
import Heading from "../Heading/Heading";
import styles from "../RelatedArticles/RelatedArticles.module.scss";

export type RelatedArticlesProps = {
  _uid: string;
  component: string;
  Article?: ArticleProps[];
  RelatedPages?: RelatedPagesProps[];
  Heading: string;
  ColourScheme: colours | string;
  ReferenceOrManual?: string;
};

type ArticleProps = {
  full_slug: string;
  tag_list: string[];
  content: {
    title: string;
    HeroImage: {
      alt: string;
      filename: string;
    };
    _uid: string;
  };
};

type RelatedPagesArrayProps = {
  content: RelatedPagesProps[];
  full_slug?: string;
  tag_list?: [];
};

type RelatedPagesProps = {
  Title?: string;
  title?: string;
  HeroImage?: {
    alt: string;
    filename: string;
  };
  RelatedImage?: {
    alt: string;
    filename: string;
  };
  PageLink?: {
    cached_url: string;
  };
  _uid: string;
};

export const RelatedArticles = (props: { content: RelatedArticlesProps }) => {
  const { content } = props;
  const {
    Article,
    Heading: HeadingTitle,
    ColourScheme,
    RelatedPages,
    ReferenceOrManual,
  } = {
    ...content,
  };
  const hasNoColourScheme = ColourScheme === "None" || !ColourScheme;
  const wrapperStyles = hasNoColourScheme && "Wrapper__None";
  const isReference = ReferenceOrManual === "Reference";
  let manualArray: any = [];
  RelatedPages?.map((item) => {
    const newObj = {
      content: {
        title: item.Title,
        HeroImage: {
          alt: item?.RelatedImage?.alt,
          filename: item?.RelatedImage?.filename,
        },
      },
      full_slug: item?.PageLink?.cached_url,
      tag_list: [],
    };
    return manualArray.push(newObj);
  });
  const articleArray = isReference ? Article : manualArray;

  return (
    <SbEditable content={content}>
      <section className={styleNames(styles, ["Wrapper", wrapperStyles])}>
        <Heading
          content={{
            component: "InPageHeading",
            HeadingSize: "Large",
            HeadingTitle: HeadingTitle || "Now read",
            _uid: content._uid,
            theme: "left-align",
          }}
        />
        <Grid justify="center">
          <Grid column sm={12}>
            <BackgroundColour colour={ColourScheme}>
              <Grid justify="center">
                <Grid column md={8} sm={12}>
                  {articleArray?.map((articleItem: RelatedPagesArrayProps) => {
                    const { full_slug = "", content, tag_list } = articleItem;
                    const { title = "", HeroImage = {}, _uid = "" } = {
                      ...content,
                    };
                    const { alt = "", filename = "" } = {
                      ...HeroImage,
                    };

                    const articleUrl = paywalUrl(tag_list, full_slug);

                    return (
                      <div key={_uid} className={styles.ArticleItem}>
                        <div className={styles.ImageWrapper}>
                          <Link
                            href={isReference ? `/${articleUrl}` : full_slug}
                            passHref
                          >
                            <a className={styles.Image}>
                              <Image
                                src={filename}
                                alt={alt}
                                width={84}
                                height={84}
                                desktopWidth={104}
                                desktopHeight={104}
                                isSmart
                              />
                            </a>
                          </Link>
                        </div>
                        <div className={styles.CopyWrapper}>
                          <Link href={`/${articleUrl}`} passHref>
                            <a className={styles.Title}>{title}</a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            </BackgroundColour>
          </Grid>
        </Grid>
      </section>
    </SbEditable>
  );
};
export default RelatedArticles;
