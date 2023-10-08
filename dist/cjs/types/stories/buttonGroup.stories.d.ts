/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "medium" | "large" | undefined;
        Style?: "link" | "solid" | "outline" | "ghostHover" | undefined;
        Icon?: boolean | undefined;
        IconType?: "search" | "link" | "filter" | "stop" | "settings1" | "settings2" | "info" | "warning" | "help" | "home" | "send" | "copy" | "command" | "expandDown" | "expandUp" | "expandLeft" | "expandRight" | "chevronDown" | "chevronUp" | "chevronLeft" | "chevronRight" | "burger" | "kebab" | "kebabVert" | "bento" | "dragVertical" | "dragHorizontal" | "close" | "user" | "userCircle" | "users" | "download" | "save" | "linkBreak" | "heart" | "mail" | "mailOpen" | "sun" | "moon" | "rainbow" | "cookie" | "check" | "lock" | "unlock" | "volumeMax" | "volumeMin" | "volumeOff" | "play" | "pause" | "forward" | "rewind" | "shuffle" | "show" | "hide" | "shoppingCart" | "trash" | undefined;
        IconPosition?: "left" | "right" | undefined;
        Oval?: boolean | undefined;
        Disabled?: boolean | undefined;
        GroupLabel?: string[] | undefined;
        onClick?: ((index: number) => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        GroupLabel: string[];
        Color: "indigo";
        Icon: false;
        Disabled: false;
        Oval: false;
        IconPosition: "left";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Outline: Story;
export declare const ghostHover: Story;
export declare const Icon: Story;
export declare const Oval: Story;
