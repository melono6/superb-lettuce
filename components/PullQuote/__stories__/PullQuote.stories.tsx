import { Story } from "@storybook/react/types-6-0";
import { PullQuote, PullQuoteProps } from "../PullQuote";

export default {
  title: "PullQuote",
  component: PullQuote,
  argTypes: {},
};

const Template: Story<PullQuoteProps> = (args) => <PullQuote content={args} />;

export const Primary = Template.bind({});
Primary.args = {
  Author: "Joe Bloggs",
  Quote:
    "Once you’re sure of your brand you also gain a tangible and easy way of talking to people about what you do.",
};
