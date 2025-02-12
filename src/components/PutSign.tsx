/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BackgroundColor, Size } from "../constants";
import { Sizes } from "../constants";

type PutSignProps = {
  backgroundColor: BackgroundColor;
  size: Size;
};

const putSignStyle = (backgroundColor: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: ${backgroundColor};
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: black;
`;

export default function PutSign(props: PutSignProps) {
  const { backgroundColor, size } = props;
  return (
    <div css={[putSignStyle(backgroundColor), sizeStyles[size]]}>
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
