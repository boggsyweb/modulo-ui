import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '../components/Controls/ToggleSwitch';


const meta = {
    title: "Library/Controls/Toggle",
    component: ToggleSwitch,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        Color: 'indigo',
        OutsideText: true,
        OutsideLeft: 'on',
        OutsideRight: 'off',
        Size: 'small',
        Disabled: false,
        Style: 'oval'
    }

} satisfies Meta<typeof ToggleSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {
        Color: 'indigo'
    }
    
}
