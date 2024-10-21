import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Input from "../components/common/Input/Input";

const meta = {
  title: "IdaTest/Input", //storybook 내에서의 파일 위치
  component: Input, //제곧내
  tags: ["autodocs"],
  parameters: {
    //storybook에서 보이는거 초기화
    layout: "centered", //컴포넌트 위치
    backgrounds: {
      //배경 색깔 조정
      values: [
        { name: "black", value: "#000" },
        { name: "white", value: "#fff" },
        { name: "gray", value: "#999" },
      ],
    },
  },
  argTypes: {
    //말 그대로 어떤 타입의 값으로 받는지
    color: { control: "color" },
    width: { control: { type: "range", min: "100", max: "500", step: "100" } },
  },
  args: { color: "#1485ee", placeholderColor: "#999999", primary: false }, //값 할당
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    border: 4,
    label: "Input Test",
    placeholder: "test",
  },
};

export const Round: Story = {
  args: {
    border: 10,
    label: "Input Test Round",
    placeholder: "round",
  },
};

export const Primary: Story = {
  args: {
    ...Normal.args,
    primary: true,
    placeholder: "primary",
    placeholderColor: "#fefefe",
  },
};
