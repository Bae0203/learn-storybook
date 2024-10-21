# 조금 많이 늦은 StoryBook 적응기

## 설치 & 실행 방법

1. 프로젝트 생성
2. npx 설치
   `npx storybook@latest init`
3. storybook 실행
   `npm run storybook`

## Storybook 사용 방법

### 컴포넌트 생성 방법 (내 방식)

1. 원래대로 컴포넌트를 만듭니다. (styled-component, props 사용)
2. props를 지정할 때 당연하겠지만 스타일링에 필요한 props를 전부 넣습니다.(함수 포함)
3. 내프로젝트/src/stories/ 파일 경로 안에서 작업합니다.
4. meta 및 Story를 알맞게 생성해줍니다.

## meta 설정

제가 쓰는 값들 위주로 정리해놨습니다.

```
const meta = {
  title : "폴더명/컵포넌트이름" //storybook 내에서의 파일 위치

  component: 컴포넌트, //제곧내

  tags: ["autodocs"], //autodocs : docs 자동 생성

  parameters: { //storybook에서 보이는거 초기화
    layout: "centered", //컴포넌트 위치
    backgrounds: { //배경 색깔 조정
      values: [
        { name: "black", value: "#000" },
        { name: "white", value: "#fff" },
        { name: "gray", value: "#999" },
      ],
    },
  },

  argTypes: { //말 그대로 어떤 타입의 값으로 받는지, color, range, check 등등 여러개임
    color: { control: "color" },
    width: { control: { type: "range", min: "100", max: "500", step: "100" } },
  },

  args: { //초기 값(인수) 할당
    color: "#1485ee", placeholderColor: "#999999", primary: false
    },
} satisfies Meta<typeof Input>;
//satisfies는 as const와 비슷하지만 보다 느슨하게 타입을 추론해주는 친구임
```

## StoryBook 컴포넌트 속성 추가하는 방법

```
export const Normal: Story = {
  args: {
    border: 4,  //당연하겠지만 자신이 props로 지정한 값을 지정
    label: "Input Test",
    placeholder: "test",
  },
};

export const Primary: Story = {
  args: {
    ...Normal.args, //이런식으로 원래 지정한값 할당가능
    primary: true,
    placeholder: "primary",
    placeholderColor: "#fefefe",
  },
};

//색깔 같은거 겹칠때는 위에 meta(정보)에 args에다가 넣으면 한번에 다 적용됨
```
