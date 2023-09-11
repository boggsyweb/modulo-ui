import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../components/Selectors/Checkbox'

const meta = {
    title: "Library/CheckboxRadio/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        Color: 'indigo',
        Size: 'small',
        Disabled: false,
    }
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {

}