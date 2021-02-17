import { Story } from "@storybook/react/types-6-0";
import {
  ThumbnailsWrapper,
  ThumbnailsWrapperProps,
} from "../ThumbnailsWrapper";

export default {
  title: "Article thumbnails",
  component: ThumbnailsWrapper,
  argTypes: {
    component: {
      control: {
        type: "select",
        options: [
          "ArticleSmallThumbnails",
          "ArticleMediumThumbnails",
          "ArticleLargeThumbnails",
        ],
      },
    },
  },
};

const Template: Story<ThumbnailsWrapperProps> = (args) => (
  <ThumbnailsWrapper content={args} />
);

export const Small = Template.bind({});
Small.args = {
  component: "ArticleSmallThumbnails",
  Article: [
    {
      content: {
        ArticleDate: "2021-01-30 20:55",
        title: "Benjamin Franklin's method of habit formation",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/806x453/1627a45eb0/example-hero.jpg",
          alt: "Benjamin",
        },
        _uid: "07f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
    {
      content: {
        ArticleDate: "2021-02-06 16:19",
        title: "What If They Let You Run The Hubble",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/598x336/1ccbd396c2/javone-prince-reading-newspaper.jpg",
          alt: "Benjamin",
        },
        _uid: "17f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
    {
      content: {
        ArticleDate: "2021-03-21 12:40",
        title: "How to meet that someone special",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/811x456/0efceed74d/aspect-16-9.jpg",
          alt: "Benjamin",
        },
        _uid: "27f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
  ],
};

export const Medium = Template.bind({});
Medium.args = {
  component: "ArticleMediumThumbnails",
  Article: [
    {
      content: {
        ArticleDate: "2021-01-30 20:55",
        title: "Benjamin Franklin's method of habit formation",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/806x453/1627a45eb0/example-hero.jpg",
          alt: "Benjamin",
        },
        _uid: "07f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
    {
      content: {
        ArticleDate: "2021-02-06 16:19",
        title: "What If They Let You Run The Hubble",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/598x336/1ccbd396c2/javone-prince-reading-newspaper.jpg",
          alt: "Benjamin",
        },
        _uid: "17f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
    {
      content: {
        ArticleDate: "2021-03-21 12:40",
        title: "How to meet that someone special",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/811x456/0efceed74d/aspect-16-9.jpg",
          alt: "Benjamin",
        },
        _uid: "27f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
  ],
};

export const Large = Template.bind({});
Large.args = {
  component: "ArticleLargeThumbnails",
  Article: [
    {
      content: {
        ArticleDate: "2021-01-30 20:55",
        title: "Benjamin Franklin's method of habit formation",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/806x453/1627a45eb0/example-hero.jpg",
          alt: "Benjamin",
        },
        _uid: "07f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
    {
      content: {
        ArticleDate: "2021-02-06 16:19",
        title: "What If They Let You Run The Hubble",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/598x336/1ccbd396c2/javone-prince-reading-newspaper.jpg",
          alt: "Benjamin",
        },
        _uid: "17f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
    {
      content: {
        ArticleDate: "2021-03-21 12:40",
        title: "How to meet that someone special",
        HeroImage: {
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/811x456/0efceed74d/aspect-16-9.jpg",
          alt: "Benjamin",
        },
        _uid: "27f93db7-4030-4231-a44c-df153f141709",
      },
      full_slug: "/",
      tag_list: [],
    },
  ],
};
