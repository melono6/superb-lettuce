import { Story } from "@storybook/react/types-6-0";
import { ImageCaption, ImageCaptionProps } from "../ImageCaption";

export default {
  title: "Image Caption",
  component: ImageCaption,
  argTypes: {
  },
};

const Template: Story<ImageCaptionProps> = (args) => <ImageCaption content={args} />;

export const Primary = Template.bind({});
Primary.args = {
    Caption: 'Image caption text',
    Copyright: '@2021 Joe Bloggs Agency',
    Image: {
        alt: 'image!',
        filename: "https://a.storyblok.com/f/102932/806x453/1627a45eb0/example-hero.jpg",

    },
    Link: {
        url: 'http://google.com'
    },
};