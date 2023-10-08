/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "medium" | "large" | undefined;
        Style?: "solid" | "outline" | "ghostHover" | undefined;
        IconType?: "search" | "link" | "filter" | "stop" | "settings1" | "settings2" | "info" | "warning" | "restricted" | "help" | "exit" | "magnify" | "home" | "mapPin" | "flag" | "globe" | "navigation" | "send" | "copy" | "chat" | "command" | "expandDown" | "expandUp" | "expandLeft" | "expandRight" | "chevronDown" | "chevronUp" | "chevronLeft" | "chevronRight" | "burger" | "kebab" | "kebabVert" | "bento" | "dragVertical" | "dragHorizontal" | "close" | "user" | "userCircle" | "users" | "download" | "cloudDownload" | "cloudUpload" | "file" | "save" | "filterOff" | "linkBreak" | "heart" | "mail" | "mailOpen" | "sun" | "moon" | "rainbow" | "cookie" | "check" | "checkAll" | "lock" | "unlock" | "volumeMax" | "volumeMin" | "volumeOff" | "play" | "pause" | "forward" | "rewind" | "shuffle" | "show" | "hide" | "shoppingCart" | "trash" | "trashEmpty" | undefined;
        Disabled?: boolean | undefined;
        Icon?: boolean | undefined;
        label?: string | undefined;
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
