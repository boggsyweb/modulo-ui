/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        ToggleColor?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        ToggleSize?: "small" | "large" | undefined;
        OutsideText?: boolean | undefined;
        OutsideLeft?: string | undefined;
        OutsideRight?: string | undefined;
        disabled?: boolean | undefined;
        onChange?: (() => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        ToggleColor: "indigo";
        OutsideText: true;
        OutsideLeft: string;
        OutsideRight: string;
        ToggleSize: "small";
        disabled: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: Story;
