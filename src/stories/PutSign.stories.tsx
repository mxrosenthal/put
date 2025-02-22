import type { Meta, StoryObj } from "@storybook/react";
import PutSign from "../photo-updating-tool/components/PutSign";

const meta: Meta<typeof PutSign> = {
  title: "Components/PutSign",
  component: PutSign,
  argTypes: {
    backgroundColor: { control: "color" },
    size: { control: { type: "radio", options: ["small", "medium", "large"] } },
  },
};

export default meta;
type Story = StoryObj<typeof PutSign>;

export const Small: Story = { args: { size: "small" } };
export const Medium: Story = { args: { size: "medium" } };
export const Large: Story = { args: { size: "large" } };
