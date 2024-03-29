/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        buttonColor?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        buttonSize?: "small" | "medium" | "large" | undefined;
        buttonStyle?: "link" | "solid" | "outline" | "ghostHover" | undefined;
        icon?: boolean | undefined;
        iconStyle?: "search" | "link" | "filter" | "settings1" | "settings2" | "info" | "home" | "send" | "copy" | "expandDown" | "expandUp" | "burger" | "kebab" | "kebabVert" | "bento" | "close" | "user" | "userCircle" | "download" | "linkBreak" | "heart" | "mail" | "mailOpen" | "sun" | "moon" | "rainbow" | "check" | "lock" | "unlock" | "volumeMax" | "volumeMin" | "volumeOff" | "show" | "hide" | "shoppingCart" | undefined;
        iconPosition?: "left" | "right" | undefined;
        oval?: boolean | undefined;
        disabled?: boolean | undefined;
        labels?: string[] | undefined;
        onClick?: ((index: number) => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        labels: string[];
        buttonColor: "indigo";
        icon: false;
        disabled: false;
        oval: false;
        iconPosition: "left";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Outline: Story;
export declare const ghostHover: Story;
export declare const Icon: Story;
export declare const Oval: Story;
