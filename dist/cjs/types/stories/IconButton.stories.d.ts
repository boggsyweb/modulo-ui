/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "medium" | "large" | undefined;
        Style?: "solid" | "outline" | "ghostHover" | undefined;
        IconType?: "search" | "link" | "filter" | "stop" | "settings1" | "settings2" | "info" | "warning" | "help" | "home" | "send" | "copy" | "command" | "expandDown" | "expandUp" | "expandLeft" | "expandRight" | "chevronDown" | "chevronUp" | "chevronLeft" | "chevronRight" | "burger" | "kebab" | "kebabVert" | "bento" | "dragVertical" | "dragHorizontal" | "close" | "user" | "userCircle" | "users" | "download" | "save" | "linkBreak" | "heart" | "mail" | "mailOpen" | "sun" | "moon" | "rainbow" | "cookie" | "check" | "lock" | "unlock" | "volumeMax" | "volumeMin" | "volumeOff" | "play" | "pause" | "forward" | "rewind" | "shuffle" | "show" | "hide" | "shoppingCart" | "trash" | undefined;
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
