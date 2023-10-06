/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "large" | undefined;
        Disabled?: boolean | undefined;
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
        value?: number | undefined;
        id?: string | undefined;
        name?: string | undefined;
        list?: string | undefined;
        label?: string | undefined;
        onChange?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    }>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        Color: "indigo";
        Size: "small";
        Disabled: false;
        min: number;
        max: number;
        step: number;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: Story;
