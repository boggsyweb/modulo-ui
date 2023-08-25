/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        buttonColor?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | undefined;
        buttonSize?: "small" | "medium" | "large" | undefined;
        buttonStyle?: "link" | "solid" | "outline" | "ghostHover" | undefined;
        icon?: boolean | undefined;
        iconStyle?: "search" | "settings" | "info" | "home" | "send" | "copy" | "expandDown" | "expandUp" | "burger" | "kebab" | "kebabVert" | "close" | undefined;
        iconPosition?: "left" | "right" | undefined;
        oval?: boolean | undefined;
        disabled?: boolean | undefined;
        label?: string | undefined;
        onClick?: (() => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        label: string;
        buttonColor: "indigo";
        icon: false;
        disabled: false;
        oval: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Outline: Story;
export declare const ghostHover: Story;
export declare const link: Story;
