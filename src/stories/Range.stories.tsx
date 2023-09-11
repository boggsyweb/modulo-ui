import type { Meta, StoryObj } from '@storybook/react';
import Range from '../components/Controls/Range';

const meta = {
    title: "Library/Controls/Range",
    component: Range,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        Color: 'indigo',
        Size: 'small',
        Disabled: false,
        min: 1,
        max: 10,
        step: 1,
    }
} satisfies Meta<typeof Range>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {
        min: 1,
        max: 10,
        step: 1,
    }
}