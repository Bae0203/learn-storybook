import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Input from "../components/common/Input/Input";

const meta = {
  title: "IdaTest/Input",
  component: Input,
  tags: ["input"],
  parameters: {
    layout: "test",
  },
  argTypes: {
    color: { control: "color" },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    border: 4,
    label: "Input Test",
    color: "#1485ee",
    placeholder: "test",
  },
};

export const Round: Story = {
  args: {
    border: 10,
    label: "Input Test Round",
    color: "#1485ee",
    placeholder: "round",
  },
};

export const Primary: Story = {
  args: {
    ...Normal.args,
    primary: true,
    color: "#1485ee",
    placeholder: "primary",
    placeholderColor: "#fefefe",
  },
};
