import { Story } from "@storybook/react/types-6-0";
import { Embed, EmbedProps } from "../Embed";

export default {
  title: "Embed",
  component: Embed,
  argTypes: {},
};

const Template: Story<EmbedProps> = (args) => <Embed content={args} />;

export const Vimeo = Template.bind({});
Vimeo.args = {
  EmbedCode:
    '<iframe src="https://player.vimeo.com/video/170241005" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
};

export const YouTube = Template.bind({});
YouTube.args = {
  EmbedCode:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/c-sZgpzxp1c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};

export const Podcast = Template.bind({});
Podcast.args = {
  EmbedCode:
    '<iframe src="https://embed.podcasts.apple.com/us/podcast/in-vogue-the-1990s/id1526206712?itsct=podcast_box&amp;itscg=30200" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style="width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; background: transparent;"></iframe>',
};
