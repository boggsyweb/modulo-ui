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
        ToggleColor: 'indigo',
        OutsideText: true,
        OutsideLeft: 'on',
        OutsideRight: 'off',
        ToggleSize: 'small',
        disabled: false,
        ToggleStyle: 'oval'
    }

} satisfies Meta<typeof ToggleSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {
        ToggleColor: 'indigo'
    }
    
}
