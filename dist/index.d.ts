import React, { ReactNode } from 'react';

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
    settings1: () => React.JSX.Element;
    settings2: () => React.JSX.Element;
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
    bento: () => React.JSX.Element;
    close: () => React.JSX.Element;
    user: () => React.JSX.Element;
    userCircle: () => React.JSX.Element;
    download: () => React.JSX.Element;
    filter: () => React.JSX.Element;
    link: () => React.JSX.Element;
    linkBreak: () => React.JSX.Element;
    heart: () => React.JSX.Element;
    mail: () => React.JSX.Element;
    mailOpen: () => React.JSX.Element;
    sun: () => React.JSX.Element;
    moon: () => React.JSX.Element;
    rainbow: () => React.JSX.Element;
    check: () => React.JSX.Element;
    lock: () => React.JSX.Element;
    unlock: () => React.JSX.Element;
    volumeMax: () => React.JSX.Element;
    volumeMin: () => React.JSX.Element;
    volumeOff: () => React.JSX.Element;
    show: () => React.JSX.Element;
    hide: () => React.JSX.Element;
    shoppingCart: () => React.JSX.Element;
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

type IconButtonProps = {
    buttonColor?: keyof typeof colorThemes;
    buttonSize?: 'small' | 'medium' | 'large';
    buttonStyle?: 'solid' | 'outline' | 'ghostHover';
    iconStyle?: keyof typeof Icons;
    disabled?: boolean;
    icon?: boolean;
    onClick?: () => void;
};
declare const IconButton: React.FC<IconButtonProps>;

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

type RangeProps = {
    RangeColor?: keyof typeof colorThemes;
    RangeSize?: 'small' | 'large';
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    id?: string;
    name?: string;
    list?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Range: React.FC<RangeProps>;

type CheckboxProps = {
    CheckboxColor?: keyof typeof colorThemes;
    CheckboxSize?: 'small' | 'large';
    CheckboxStyle?: 'solid' | 'outline';
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

type ModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    children?: ReactNode;
    OutsideClick?: boolean;
};
declare const Modal: React.FC<ModalProps>;

export { Button, ButtonGroup, Card, Checkbox, IconButton, Modal, Radio, Range, ToggleSwitch };
