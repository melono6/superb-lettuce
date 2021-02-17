import { Story } from "@storybook/react/types-6-0";
import { ImageCarousel, ImageCarouselProps } from "../ImageCarousel";

export default {
  title: "Image carousel",
  component: ImageCarousel,
};

const Template: Story<ImageCarouselProps> = (args) => (
  <ImageCarousel content={args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Slide: [
    {
      Image: {
        alt: "Trees",
        title: "",
        filename:
          "https://a.storyblok.com/f/103932/811x456/c37b072847/aspect-16-9.jpg",
        copyright: "",
      },
      Caption: "Carousel slide number 1",
    },
    {
      Image: {
        alt: "Woman on chair",
        title: "Caption title",
        filename:
          "https://a.storyblok.com/f/103932/806x453/4665bd8139/inspirational-woman.png",
        copyright: "",
      },
      Caption: "Carousel slide number 2",
    },
    {
      Image: {
        alt: "Woman on chair",
        title: "Caption title 2",
        filename:
          "https://a.storyblok.com/f/103932/806x453/4665bd8139/inspirational-woman.png",
        copyright: "",
      },
      Caption: "Carousel slide number 3",
    },
  ],
};
