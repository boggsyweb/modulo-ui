import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox'

const meta = {
    title: "Library/CheckboxRadio/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        CheckboxColor: 'indigo',
        CheckboxSize: 'small',
        disabled: false,
    }
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {

}