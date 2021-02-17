import { Story } from "@storybook/react/types-6-0";
import { Heading, HeadingProps } from "../Heading";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    component: {
      control: {
        type: "select",
        options: ["PageHeading", "InPageHeading"],
      },
    },
    HeadingSize: {
      control: {
        type: "select",
        options: ["Large", "Small"],
      },
    },
    FontWeight: {
      control: {
        type: "select",
        options: ["Normal", "Bold"],
      },
    },
  },
};

const Template: Story<HeadingProps> = (args) => <Heading content={args} />;

export const Large = Template.bind({});
Large.args = {
  component: "InPageHeading",
  HeadingSize: "Large",
  FontWeight: "Normal",
  HeadingTitle: "New talent",
};

export const Small = Template.bind({});
Small.args = {
  component: "InPageHeading",
  HeadingSize: "Small",
  FontWeight: "Bold",
  HeadingTitle: "New talent",
};

export const H1 = Template.bind({});
H1.args = {
  component: "PageHeading",
  HeadingSize: "Large",
  FontWeight: "Bold",
  HeadingTitle: "New talent",
};
