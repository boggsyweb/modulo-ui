/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "medium" | "large" | undefined;
        Style?: "link" | "solid" | "outline" | "ghostHover" | undefined;
        Icon?: boolean | undefined;
        IconType?: "search" | "link" | "filter" | "settings1" | "settings2" | "info" | "home" | "send" | "copy" | "expandDown" | "expandUp" | "burger" | "kebab" | "kebabVert" | "bento" | "close" | "user" | "userCircle" | "download" | "linkBreak" | "heart" | "mail" | "mailOpen" | "sun" | "moon" | "rainbow" | "check" | "lock" | "unlock" | "volumeMax" | "volumeMin" | "volumeOff" | "show" | "hide" | "shoppingCart" | undefined;
        IconPosition?: "left" | "right" | undefined;
        Oval?: boolean | undefined;
        Disabled?: boolean | undefined;
        ButtonLabel?: string | undefined;
        isFirst?: boolean | undefined;
        isLast?: boolean | undefined;
        onClick?: (() => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        ButtonLabel: string;
        Color: "indigo";
        Icon: false;
        Disabled: false;
        Oval: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Outline: Story;
export declare const ghostHover: Story;
export declare const link: Story;
