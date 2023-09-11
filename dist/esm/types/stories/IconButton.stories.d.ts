/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "medium" | "large" | undefined;
        Style?: "solid" | "outline" | "ghostHover" | undefined;
        IconType?: "search" | "link" | "filter" | "settings1" | "settings2" | "info" | "home" | "send" | "copy" | "expandDown" | "expandUp" | "burger" | "kebab" | "kebabVert" | "bento" | "close" | "user" | "userCircle" | "download" | "linkBreak" | "heart" | "mail" | "mailOpen" | "sun" | "moon" | "rainbow" | "check" | "lock" | "unlock" | "volumeMax" | "volumeMin" | "volumeOff" | "show" | "hide" | "shoppingCart" | undefined;
        Disabled?: boolean | undefined;
        Icon?: boolean | undefined;
        onClick?: (() => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        Color: "indigo";
        Disabled: false;
        Icon: true;
        IconType: "info";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Outline: Story;
export declare const ghostHover: Story;
