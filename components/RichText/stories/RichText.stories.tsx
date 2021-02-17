import { Story } from "@storybook/react/types-6-0";
import { RichText, RichTextProps } from "../RichText";

export default {
  title: "Rich text",
  component: RichText,
};

const Template: Story<RichTextProps> = (args) => <RichText content={args} />;
export const Heading1 = Template.bind({});
Heading1.args = {
  RichText: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 1,
        },
        content: [
          {
            text: "Heading 1",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            text:
              "Are you one of the thousands of Iphone owners who has no idea that they can get free games for their Iphone? It’s pretty cool to download things from Itunes, but with a little research you can find thousands of other places to download from -check out our tips below to help you find out where. And I’m an in page ",
            type: "text",
          },
          {
            text: "link",
            type: "text",
            marks: [
              {
                type: "link",
                attrs: {
                  href: "/terms-and-conditions",
                  uuid: "e64c7b91-8383-46d3-aae1-644ef3c4df80",
                  anchor: null,
                  target: "_self",
                  linktype: "story",
                },
              },
            ],
          },
          {
            text: ".",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
      },
    ],
  },
};

export const Heading2 = Template.bind({});
Heading2.args = {
  RichText: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 2,
        },
        content: [
          {
            text: "Heading 2",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            text: "This is ",
            type: "text",
          },
          {
            text: "bold",
            type: "text",
            marks: [
              {
                type: "bold",
              },
            ],
          },
          {
            text: " text.",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            text: "This is ",
            type: "text",
          },
          {
            text: "italic",
            type: "text",
            marks: [
              {
                type: "italic",
              },
            ],
          },
          {
            text: " text",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            text: "This is ",
            type: "text",
          },
          {
            text: "underline",
            type: "text",
            marks: [
              {
                type: "underline",
              },
            ],
          },
          {
            text: " text",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            text: "This is strikethrough text",
            type: "text",
            marks: [
              {
                type: "strike",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const Heading3 = Template.bind({});
Heading3.args = {
  RichText: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 3,
        },
        content: [
          {
            text: "Heading 3",
            type: "text",
          },
        ],
      },
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Aliquam sit amet eros rhoncus ",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Tempus enim sed, venenatis sem ",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Donec volutpat metus accumsan ",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Ex faucibus, eu pretium lacus imperdiet",
                    type: "text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "ordered_list",
        attrs: {
          order: 1,
        },
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Aliquam sit amet eros rhoncus ",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Tempus enim sed, venenatis sem ",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Donec volutpat metus accumsan ",
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Ex faucibus, eu pretium lacus imperdiet",
                    type: "text",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export const Heading4 = Template.bind({});
Heading4.args = {
  RichText: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 4,
        },
        content: [
          {
            text: "Heading 4",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            text:
              "The Iphone is staggeringly popular, although it hasn’t really come as much of a surprise – you only have to consider the Ipod as proof of Apple’s dominance with such gadgets. If you are lucky enough to be one of the early Iphone owners, check out these resources to help you get some free Iphone games.",
            type: "text",
          },
        ],
      },
    ],
  },
};

export const Heading5And6 = Template.bind({});
Heading5And6.args = {
  RichText: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 6,
        },
        content: [
          {
            text: "Heading 5 and Heading 6",
            type: "text",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            text:
              "The Iphone is staggeringly popular, although it hasn’t really come as much of a surprise – you only have to consider the Ipod as proof of Apple’s dominance with such gadgets. If you are lucky enough to be one of the early Iphone owners, check out these resources to help you get some free Iphone games.",
            type: "text",
          },
        ],
      },
    ],
  },
};
export const Blockquote = Template.bind({});
Blockquote.args = {
  RichText: {
    type: "doc",
    content: [
      {
        type: "blockquote",
        content: [
          {
            type: "paragraph",
            content: [
              {
                text:
                  "This is a block quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis mauris magna, eget finibus diam mollis eu. Fusce vel dolor scelerisque ligula cursus lacinia. In tempus, magna nec viverra fermentum, felis purus sodales mi, quis consequat nulla nunc quis mi.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },
};
