/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        themeName?: "red" | "blue" | undefined;
        label?: string | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        themeName: "red";
        label: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Red: Story;
export declare const Blue: Story;
