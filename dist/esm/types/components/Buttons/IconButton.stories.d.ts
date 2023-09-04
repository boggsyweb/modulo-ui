/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        buttonColor?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        buttonSize?: "small" | "medium" | "large" | undefined;
        buttonStyle?: "solid" | "outline" | "ghostHover" | undefined;
        iconStyle?: "search" | "link" | "filter" | "settings" | "info" | "home" | "send" | "copy" | "expandDown" | "expandUp" | "burger" | "kebab" | "kebabVert" | "close" | "user" | "userCircle" | "download" | "linkBreak" | "heart" | "mail" | "mailOpen" | "sun" | "moon" | "rainbow" | undefined;
        disabled?: boolean | undefined;
        icon?: boolean | undefined;
        onClick?: (() => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        buttonColor: "indigo";
        disabled: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Outline: Story;
export declare const ghostHover: Story;
