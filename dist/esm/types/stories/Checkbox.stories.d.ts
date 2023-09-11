/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        Color?: "red" | "pink" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "indigo" | "purple" | "gray" | "black" | "white" | undefined;
        Size?: "small" | "large" | undefined;
        Style?: "solid" | "outline" | undefined;
        Disabled?: boolean | undefined;
        name?: string | undefined;
        id?: string | undefined;
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: Story;
