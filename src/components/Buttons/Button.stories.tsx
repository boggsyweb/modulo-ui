import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
    title: "Library/Button",
    component: Button, 
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
      },
      args: {
        label: 'Button' 
      },
    } satisfies Meta<typeof Button>;
    export default meta;
    type Story = StoryObj<typeof meta>;

export const Red: Story = {
    args: {
        buttonColor: 'red'
    },
};
export const Blue: Story = {
    args: {
        buttonColor: 'blue'
    }
}

