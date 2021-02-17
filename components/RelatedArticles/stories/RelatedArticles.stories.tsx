import { Story } from "@storybook/react/types-6-0";
import { RelatedArticles, RelatedArticlesProps } from "../RelatedArticles";

export default {
  title: "Related articles",
  component: RelatedArticles,
  argTypes: {
    ColourScheme: {
      control: {
        type: "select",
        options: [
          "None",
          "Peche",
          "Lemon",
          "Lime",
          "Pearl",
          "Salmon",
          "Mushroom",
          "Stone",
        ],
      },
    },
  },
};

const Template: Story<RelatedArticlesProps> = (args) => (
  <RelatedArticles content={args} />
);

export const Lemon = Template.bind({});
Lemon.args = {
  ColourScheme: "Lemon",
  Article: [
    {
      full_slug: "/",
      tag_list: [],
      content: {
        title: "Benjamin Franklin's method of habit formation",
        HeroImage: {
          alt: "Hero image alt",
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/806x453/1627a45eb0/example-hero.jpg",
        },
        _uid: "07f93db7-4030-4231-a44c-df153f141709",
      },
    },
    {
      full_slug: "/",
      tag_list: [],
      content: {
        title: "What If They Let You Run The Hubble",
        HeroImage: {
          alt: "Hero image alt",
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/598x336/1ccbd396c2/javone-prince-reading-newspaper.jpg",
        },
        _uid: "17f93db7-4030-4231-a44c-df153f141709",
      },
    },
    {
      full_slug: "/",
      tag_list: [],
      content: {
        title: "How to meet that someone special",
        HeroImage: {
          alt: "Hero image alt",
          filename:
            "https://img2.storyblok.com/104x104/smart/f/102932/811x456/0efceed74d/aspect-16-9.jpg",
        },
        _uid: "27f93db7-4030-4231-a44c-df153f141709",
      },
    },
  ],
};
