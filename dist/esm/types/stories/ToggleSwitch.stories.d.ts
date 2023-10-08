/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "large" | undefined;
        Style?: "oval" | "rectangle" | undefined;
        OutsideText?: boolean | undefined;
        OutsideLeft?: string | undefined;
        OutsideRight?: string | undefined;
        Disabled?: boolean | undefined;
        label?: string | undefined;
        onChange?: (() => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        Color: "indigo";
        OutsideText: true;
        OutsideLeft: string;
        OutsideRight: string;
        Size: "small";
        Disabled: false;
        Style: "oval";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: Story;
