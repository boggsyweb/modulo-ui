import React from 'react';

declare const colorThemes: {
    red: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    pink: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    orange: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    yellow: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    green: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    teal: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    blue: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    cyan: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    indigo: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    purple: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    gray: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    black: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
    white: {
        primaryShade: string;
        secondaryShade: string;
        hoverShade: string;
    };
};

declare const Icons: {
    settings: () => React.JSX.Element;
    info: () => React.JSX.Element;
    search: () => React.JSX.Element;
    home: () => React.JSX.Element;
    send: () => React.JSX.Element;
    copy: () => React.JSX.Element;
    expandDown: () => React.JSX.Element;
    expandUp: () => React.JSX.Element;
    burger: () => React.JSX.Element;
    kebab: () => React.JSX.Element;
    kebabVert: () => React.JSX.Element;
    close: () => React.JSX.Element;
};

type ButtonProps = {
    buttonColor?: keyof typeof colorThemes;
    buttonSize?: 'small' | 'medium' | 'large';
    buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
    icon?: boolean;
    iconStyle?: keyof typeof Icons;
    iconPosition?: 'left' | 'right';
    oval?: boolean;
    disabled?: boolean;
    label?: string;
    isFirst?: boolean;
    isLast?: boolean;
    className?: string;
    onClick?: () => void;
};
declare const Button: React.FC<ButtonProps>;

type ButtonGroupProps = {
    buttonColor?: keyof typeof colorThemes;
    buttonSize?: 'small' | 'medium' | 'large';
    buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
    icon?: boolean;
    iconStyle?: keyof typeof Icons;
    iconPosition?: 'left' | 'right';
    oval?: boolean;
    disabled?: boolean;
    labels?: string[];
    onClick?: (index: number) => void;
};
declare const ButtonGroup: React.FC<ButtonGroupProps>;

type CardProps = {
    title?: boolean;
    CardTitle?: string;
    subtitle?: boolean;
    CardSubtitle?: string;
    description?: boolean;
    CardDescription?: string;
    CardStyle?: 'standard' | 'border' | 'shadow';
    CardSize?: 'small' | 'medium' | 'large';
    image?: boolean;
    ImageAlt?: string;
    ImageSrc?: string;
    caption?: boolean;
    ImageCaption?: string;
    divider?: boolean;
    buttons?: boolean;
    buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
    buttonLabels?: string[];
    buttonColor?: keyof typeof colorThemes;
    onClick?: (index: number) => void;
};
declare const Card: React.FC<CardProps>;

type ToggleProps = {
    ToggleColor?: keyof typeof colorThemes;
    ToggleSize?: 'small' | 'large';
    ToggleStyle?: 'oval' | 'rectangle';
    OutsideText?: boolean;
    OutsideLeft?: string;
    OutsideRight?: string;
    disabled?: boolean;
    onChange?: () => void;
};
declare const ToggleSwitch: React.FC<ToggleProps>;

type CheckboxProps = {
    CheckboxColor?: keyof typeof colorThemes;
    CheckboxSize?: 'small' | 'large';
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
    onChange?: () => void;
};
declare const Checkbox: React.FC<CheckboxProps>;

type RadioProps = {
    RadioColor?: keyof typeof colorThemes;
    RadioSize?: 'small' | 'large';
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Radio: React.FC<RadioProps>;

export { Button, ButtonGroup, Card, Checkbox, Radio, ToggleSwitch };
