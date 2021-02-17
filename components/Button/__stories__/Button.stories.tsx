import { Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../Button";

export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["Primary", "Secondary"],
      },
    },
    size: {
      control: {
        type: "select",
        options: [1, 2, 3],
      },
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: "Primary",
  text: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "Secondary",
  text: "Secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled",
  disabled: true,
};

export const FullWidthAndPrimary = Template.bind({});
FullWidthAndPrimary.args = {
  theme: ["FullWidth", "Primary"],
  text: "Full width & primary",
};

export const Small = Template.bind({});
Small.args = {
  size: 1,
  text: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: 2,
  text: "Medium",
};

export const PrimaryAndLarge = Template.bind({});
PrimaryAndLarge.args = {
  theme: "Primary",
  size: 3,
  text: "Primary & large",
};
