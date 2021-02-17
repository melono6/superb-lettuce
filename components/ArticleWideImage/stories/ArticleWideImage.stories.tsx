import { Story } from "@storybook/react/types-6-0";
import { ArticleWideImage, ArticleWideImageProps } from "../ArticleWideImage";

export default {
  title: "Article wide image",
  component: ArticleWideImage,
  argTypes: {
    ReferenceOrManual: {
      control: {
        type: "select",
        options: ["Manual", "Reference"],
      },
    },
  },
};

const Template: Story<ArticleWideImageProps> = (args) => (
  <ArticleWideImage content={args} />
);

export const Manual = Template.bind({});
Manual.args = {
  _uid: "c120ba2d-3651-4173-aab3-95b111e51911",
  component: "ArticleWideImage",
  title: "Manual title",
  Author: "Bob Dylan",
  HeroImage: {
    alt: "hero image alt",
    filename:
      "https://a.storyblok.com/f/103932/1220x448/c6aafd162d/landscape-lady-sleeping.jpg",
  },
  TeaserCopy:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, mauris sagittis aliquam porttitor, leo lorem gravida neque, et tempor quam risus quis ipsum",
  ReferenceOrManual: "Manual",
  PageLink: {
    cached_url: "about",
  },
};
