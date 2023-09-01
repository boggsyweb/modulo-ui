import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

const meta = {
    title: "Library/CheckboxRadio/Radio",
    component: Radio,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        RadioColor: 'indigo',
        RadioSize: 'small',
        disabled: false,
        
    }
} satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {

}