import { Story } from "@storybook/react/types-6-0";
import { SocialShare, SocialShareProps } from "../SocialShare";

export default {
  title: "SocialShare",
  component: SocialShare,
  argTypes: {},
};

const Template: Story<SocialShareProps> = (args) => (
  <SocialShare content={args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Heading: "Share",
  SocialShareLink: [
    {
      Name: "Twitter",
      DynamicURL: "https://twitter.com/intent/tweet?url=",
      Icon: {
        alt: "Twitter icon",
        copyright: "",
        filename:
          "https://a.storyblok.com/f/103932/x/d6e9bc17b6/0402-twitter.svg",
        title: "",
      },
      _uid: "n/a",
      component: "n/a",
    },
  ],
};
