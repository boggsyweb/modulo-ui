/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Title?: string | undefined;
        Subtitle?: string | undefined;
        Description?: string | undefined;
        CardStyle?: "border" | "standard" | "shadow" | undefined;
        Image?: boolean | undefined;
        ImageAlt?: string | undefined;
        ImageSrc?: string | undefined;
        ImageCaption?: string | undefined;
        Divider?: boolean | undefined;
        Buttons?: boolean | undefined;
        Style?: "link" | "solid" | "outline" | "ghostHover" | undefined;
        Size?: "small" | "medium" | "large" | undefined;
        ButtonLabel?: string[] | undefined;
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        onClick?: ((index: number) => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        Title: string;
        Subtitle: string;
        Description: string;
        ImageSrc: string;
        ImageCaption: string;
        Buttons: false;
        ButtonLabel: string[];
        Size: "medium";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: Story;
export declare const Border: Story;
export declare const Shadow: Story;
export declare const Buttons: Story;
