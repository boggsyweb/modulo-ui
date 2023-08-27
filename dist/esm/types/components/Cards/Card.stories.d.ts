/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        title?: boolean | undefined;
        CardTitle?: string | undefined;
        subtitle?: boolean | undefined;
        CardSubtitle?: string | undefined;
        description?: boolean | undefined;
        CardDescription?: string | undefined;
        CardStyle?: "border" | "standard" | "shadow" | undefined;
        CardSize?: "small" | "medium" | "large" | undefined;
        image?: boolean | undefined;
        ImageAlt?: string | undefined;
        ImageSrc?: string | undefined;
        caption?: boolean | undefined;
        ImageCaption?: string | undefined;
        divider?: boolean | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        CardTitle: string;
        CardSubtitle: string;
        CardDescription: string;
        ImageSrc: string;
        ImageCaption: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: Story;
export declare const Border: Story;
export declare const Shadow: Story;
