import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta = {
    title: "Library/Buttons/IconButton",
    component: IconButton,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        buttonColor: 'indigo',
        disabled: false,
        icon: true,
    },

} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story ={
    args: {
        buttonStyle: 'solid'
    },    
};
export const Outline: Story = {
    args: {
        buttonStyle: 'outline'
    },
};
export const ghostHover: Story = {
    args: {
        buttonStyle: 'ghostHover'
    },
};