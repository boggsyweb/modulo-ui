import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../components/Buttons/IconButton';

const meta = {
    title: "Library/Buttons/IconButton",
    component: IconButton,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        Color: 'indigo',
        Disabled: false,
        Icon: true,
        IconType: 'info'
    },

} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story ={
    args: {
        Style: 'solid'
    },    
};
export const Outline: Story = {
    args: {
        Style: 'outline'
    },
};
export const ghostHover: Story = {
    args: {
        Style: 'ghostHover'
    },
};