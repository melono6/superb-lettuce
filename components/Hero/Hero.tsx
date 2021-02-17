import React from "react";
import Link from "next/link";
import SbEditable from "storyblok-react";
import getDevice from "../../utilities/getDevice";
import styleNames from "../../utilities/style-names";
import { format } from "../../utilities/dateFormat";
import paywalUrl from "../../utilities/paywallUrl";
import Image from "../Image/Image";
import Grid from "../Grid/Grid";
import BackgroundColour from "../Global/BackgroundColour/BackgroundColour";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import styles from "../Hero/Hero.module.scss";

export type ReferenceHeroProps = {
  Article: {
    content: {
      ArticleDate: string;
      Author: string;
      teaserCopy: string;
      title: string;
      label: string;
      heroImage: any;
      Theme: string;
      _uid: string;
      component: string;
    };
    full_slug?: string;
    tag_list: string[];
  };
};

export type HeroProps = {
  ArticleDate: string;
  heroImage: any;
  Author: string;
  Label: string;
  teaserCopy: string;
  title: string;
  Theme?: string;
  _uid: string;
  component: string;
  ColourScheme?: colours | string;
  full_slug?: string;
  tag_list?: string[];
};

type DimensionProps = {
  width: number;
  height: number;
  desktopWidth?: number;
  desktopHeight?: number;
};

export const ReferenceHero = (props: { content: ReferenceHeroProps }) => {
  const { content } = props;
  const { Article } = content;
  const { content: referenceContent, full_slug, tag_list } = { ...Article };
  const referenceObj = {
    ...referenceContent,
    Theme: "Primary",
    title: referenceContent?.title,
    Label: referenceContent?.label,
    heroImage: {
      alt: referenceContent?.heroImage?.alt,
      filename: referenceContent?.heroImage?.filename,
      title: referenceContent?.heroImage?.title,
      copyright: referenceContent?.heroImage?.copyright,
    },
    full_slug: full_slug,
    tag_list,
    ColourScheme: "None",
  };

  return <Hero content={referenceObj} theme="reference" />;
};

export const Hero = (props: { theme?: string; content: HeroProps }) => {
  const { content, theme } = { ...props };
  const isReference = theme === "reference";
  const horizontalRuleTheme = isReference ? "primary" : "secondary";
  const {
    title,
    ArticleDate,
    Author,
    Label,
    teaserCopy,
    heroImage,
    Theme = "Primary",
    ColourScheme,
    full_slug,
    tag_list,
  } = content;

  const heroTheme = theme ? theme : Theme;
  const isFullWidth = heroTheme === "Full width image";
  const isPrimary = heroTheme === "Primary";
  const device = getDevice();
  const isMobile = device === "mobile";
  const isPrimaryMobile = isPrimary && isMobile;
  const articleWrapperStyle = !isReference && "Wrapper__Article";
  const fullWidthStyle = isFullWidth && "Hero__FullWidth";
  const hasNoBackgroundColour =
    ColourScheme === "None" || ColourScheme === undefined;
  const hasBackgroundColour = !hasNoBackgroundColour;
  const backgroundColourPaddingStyle =
    hasBackgroundColour && "Hero__BackgroundColourPadding";

  let dimensions: DimensionProps;
  switch (heroTheme) {
    case "reference":
      dimensions = {
        width: 310,
        height: 232,
      };
      break;
    case "Full width image":
      dimensions = {
        width: 325,
        height: 325,
        desktopWidth: 1220,
        desktopHeight: 686,
      };
      break;
    default:
      dimensions = {
        width: 325,
        height: 325,
        desktopWidth: 610,
        desktopHeight: 686,
      };
  }

  const articleUrl = paywalUrl(tag_list, full_slug);

  const LabelContent = () => (
    <>
      <p className={styles.Label}>{Label}</p>
      <div className={styles.RuleWrapper}>
        <HorizontalRule theme={horizontalRuleTheme} />
      </div>
    </>
  );

  const MetaContent = () => (
    <>
      {(Author || ArticleDate) && (
        <div className={styles.MetaWrapper}>
          {Author && <cite className={styles.Author}>By {Author}</cite>}
          {ArticleDate && (
            <p className={styles.ArticleDate}>{format(ArticleDate)}</p>
          )}
        </div>
      )}
    </>
  );

  return (
    <SbEditable content={content}>
      <section className={styleNames(styles, ["Wrapper", articleWrapperStyle])}>
        <BackgroundColour colour={ColourScheme}>
          <div
            className={styleNames(styles, [
              "Hero",
              fullWidthStyle,
              backgroundColourPaddingStyle,
              isPrimary && "Hero__Primary",
            ])}
          >
            <Grid row alignItems="center">
              <Grid column sm={12} md={isFullWidth ? 12 : 6}>
                {Label && isPrimaryMobile && (
                  <div className={styles.LabelWrapper__Mobile}>
                    <LabelContent />
                    <MetaContent />
                  </div>
                )}
                <div className={styles.ImageWrapper}>
                  <Image
                    src={heroImage.fields.file.url}
                    alt={'test'}
                    width={dimensions.width}
                    height={dimensions.height}
                    desktopWidth={dimensions.desktopWidth}
                    desktopHeight={dimensions.desktopHeight}
                    isSmart={isReference}
                    eager={true}
                  />
                </div>
              </Grid>
              <Grid column sm={12} md={isFullWidth ? 12 : 6}>
                <div className={styles.CopyWrapper}>
                  {Label && !isPrimaryMobile && (
                    <div className={styles.LabelWrapper__Desktop}>
                      <LabelContent />
                    </div>
                  )}
                  {full_slug ? (
                    <h1 className={styles.Title}>
                      <Link href={`/${articleUrl}`} passHref>
                        <a className={styles.TitleLink}>{title}</a>
                      </Link>
                    </h1>
                  ) : (
                    <h1 className={styles.Title}>{title}</h1>
                  )}
                  {full_slug && teaserCopy && (
                    <h2 className={styles.TeaserCopy}>
                      <Link href={`/${articleUrl}`} passHref>
                        <a className={styles.TeaserCopyLink}>{teaserCopy}</a>
                      </Link>
                    </h2>
                  )}
                  {!full_slug && teaserCopy && (
                    <h2 className={styles.TeaserCopy}>{teaserCopy}</h2>
                  )}
                  {!isPrimaryMobile && <MetaContent />}
                </div>
              </Grid>
            </Grid>
          </div>
        </BackgroundColour>
      </section>
    </SbEditable>
  );
};
export default Hero;
