import { Story } from "@storybook/react/types-6-0";
import { LineBreak, LineBreakProps } from "../LineBreak";

export default {
  title: "Line break",
  component: LineBreak,
  argTypes: {
    Style: {
      control: {
        type: "select",
        options: ["Line", "Diamond"],
      },
    },
    ColourScheme: {
      control: {
        type: "select",
        options: ["Black", "Orange"],
      },
    },
  },
};

const Template: Story<LineBreakProps> = (args) => <LineBreak content={args} />;

export const Line = Template.bind({});
Line.args = {
  Style: "Line",
  ColourScheme: "Black",
};

export const Diamond = Template.bind({});
Diamond.args = {
  Style: "Diamond",
  ColourScheme: "Orange",
};
