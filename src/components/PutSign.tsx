/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Size } from "../constants";
import { Sizes } from "../constants";
import { Color } from "../types";
import { AggregationColor } from "antd/es/color-picker/color";

type PutSignProps = {
  backgroundColor: Color;
  fontColor: Color;
  size: Size;
};

const putSignStyle = (backgroundColor: Color, fontColor: Color) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: ${typeof backgroundColor === "string"
    ? backgroundColor
    : backgroundColor instanceof AggregationColor
    ? backgroundColor.toHexString()
    : "white"};
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: ${typeof fontColor === "string" ? fontColor : fontColor.toHexString()};
`;

export default function PutSign(props: PutSignProps) {
  const { backgroundColor, fontColor, size } = props;
  return (
    <div css={[putSignStyle(backgroundColor, fontColor), sizeStyles[size]]}>
      <span>Put.</span>
    </div>
  );
}

export const sizeStyles = {
  micro: css(Sizes.micro),
  tiny: css(Sizes.tiny),
  small: css(Sizes.small),
  medium: css(Sizes.medium),
  large: css(Sizes.large),
  venti: css(Sizes.venti),
  yuge: css(Sizes.yuge),
};
