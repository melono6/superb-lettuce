import React from "react";
import Page from "../Page/Page";
import Home from "../Page/Home";
import ArticleSettings from "../Page/ArticleSettings";
import Grid from "../Grid/Grid";
import Heading from "../Heading/Heading";
import { ReferenceHero, Hero } from "../Hero/Hero";
import SearchResults from "../SearchResults/SearchResults";
import ArticleThumbnails from "../ArticleThumbnails/ThumbnailsWrapper";
import ThumbnailsWrapper from "../ArticleThumbnails/ThumbnailsWrapper";
import ArticleWideImage from "../ArticleWideImage/ArticleWideImage";
import ImageCaption from "../ImageCaption/ImageCaption";
import LineBreak from "../LineBreak/LineBreak";
import RichText from "../RichText/RichText";
import PullQuote from "../PullQuote/PullQuote";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import Embed from "../Embed/Embed";
import SocialShare from "@components/SocialShare/SocialShare";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Components = {
  Page: Page,
  page: Page,
  Home: Home,
  Grid: Grid,
  PageHeading: Heading,
  InPageHeading: Heading,
  HomepageHero: ReferenceHero,
  ArticleHero: Hero,
  hero: Hero,
  ArticleSmallThumbnails: ThumbnailsWrapper,
  ArticleMediumThumbnails: ThumbnailsWrapper,
  ArticleLargeThumbnails: ThumbnailsWrapper,
  ArticleWideImage: ArticleWideImage,
  ArticleThumbnails: ArticleThumbnails,
  SearchResults: SearchResults,
  LineBreak: LineBreak,
  ImageCaption: ImageCaption,
  RichText: RichText,
  PullQuote: PullQuote,
  RelatedArticles: RelatedArticles,
  Embed: Embed,
  Social: SocialShare,
  SocialShare: SocialShare,
  Carousel: ImageCarousel,
  ArticleSettings,
};

type BlokProps = {
  component: string;
  _uid: string;
};

export const Index = (blok: BlokProps, otherProps?: object) => {
  if (typeof Components[blok.component] !== "undefined") {
    return React.createElement(Components[blok.component], {
      key: blok._uid,
      content: blok,
      ...otherProps,
    });
  }
  return React.createElement(
    () => <div>The component {blok.component} has not been created yet.</div>,
    { key: blok._uid }
  );
};
export default Index;
