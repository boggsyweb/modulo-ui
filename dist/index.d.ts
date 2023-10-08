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
    warning: () => React.JSX.Element;
    help: () => React.JSX.Element;
    search: () => React.JSX.Element;
    home: () => React.JSX.Element;
    send: () => React.JSX.Element;
    copy: () => React.JSX.Element;
    command: () => React.JSX.Element;
    expandDown: () => React.JSX.Element;
    expandUp: () => React.JSX.Element;
    expandLeft: () => React.JSX.Element;
    expandRight: () => React.JSX.Element;
    chevronDown: () => React.JSX.Element;
    chevronUp: () => React.JSX.Element;
    chevronLeft: () => React.JSX.Element;
    chevronRight: () => React.JSX.Element;
    burger: () => React.JSX.Element;
    kebab: () => React.JSX.Element;
    kebabVert: () => React.JSX.Element;
    bento: () => React.JSX.Element;
    dragVertical: () => React.JSX.Element;
    dragHorizontal: () => React.JSX.Element;
    close: () => React.JSX.Element;
    user: () => React.JSX.Element;
    userCircle: () => React.JSX.Element;
    users: () => React.JSX.Element;
    download: () => React.JSX.Element;
    save: () => React.JSX.Element;
    filter: () => React.JSX.Element;
    link: () => React.JSX.Element;
    linkBreak: () => React.JSX.Element;
    heart: () => React.JSX.Element;
    mail: () => React.JSX.Element;
    mailOpen: () => React.JSX.Element;
    sun: () => React.JSX.Element;
    moon: () => React.JSX.Element;
    rainbow: () => React.JSX.Element;
    cookie: () => React.JSX.Element;
    check: () => React.JSX.Element;
    lock: () => React.JSX.Element;
    unlock: () => React.JSX.Element;
    volumeMax: () => React.JSX.Element;
    volumeMin: () => React.JSX.Element;
    volumeOff: () => React.JSX.Element;
    play: () => React.JSX.Element;
    stop: () => React.JSX.Element;
    pause: () => React.JSX.Element;
    forward: () => React.JSX.Element;
    rewind: () => React.JSX.Element;
    shuffle: () => React.JSX.Element;
    show: () => React.JSX.Element;
    hide: () => React.JSX.Element;
    shoppingCart: () => React.JSX.Element;
    trash: () => React.JSX.Element;
};

type ButtonProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'medium' | 'large';
    Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
    Icon?: boolean;
    IconType?: keyof typeof Icons;
    IconPosition?: 'left' | 'right';
    Oval?: boolean;
    Disabled?: boolean;
    ButtonLabel?: string;
    isFirst?: boolean;
    isLast?: boolean;
    onClick?: () => void;
};
declare const Button: React.FC<ButtonProps>;

type ButtonGroupProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'medium' | 'large';
    Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
    Icon?: boolean;
    IconType?: keyof typeof Icons;
    IconPosition?: 'left' | 'right';
    Oval?: boolean;
    Disabled?: boolean;
    GroupLabel?: string[];
    onClick?: (index: number) => void;
};
declare const ButtonGroup: React.FC<ButtonGroupProps>;

type IconButtonProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'medium' | 'large';
    Style?: 'solid' | 'outline' | 'ghostHover';
    IconType?: keyof typeof Icons;
    Disabled?: boolean;
    Icon?: boolean;
    onClick?: () => void;
};
declare const IconButton: React.FC<IconButtonProps>;

type CardProps = {
    Title?: string;
    Subtitle?: string;
    Description?: string;
    CardStyle?: 'standard' | 'border' | 'shadow';
    Image?: boolean;
    ImageAlt?: string;
    ImageSrc?: string;
    ImageCaption?: string;
    Divider?: boolean;
    Buttons?: boolean;
    Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
    Size?: 'small' | 'medium' | 'large';
    ButtonLabel?: string[];
    Color?: keyof typeof colorThemes;
    onClick?: (index: number) => void;
};
declare const Card: React.FC<CardProps>;

type ToggleProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Style?: 'oval' | 'rectangle';
    OutsideText?: boolean;
    OutsideLeft?: string;
    OutsideRight?: string;
    Disabled?: boolean;
    onChange?: () => void;
};
declare const ToggleSwitch: React.FC<ToggleProps>;

type RangeProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    id?: string;
    name?: string;
    list?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Range: React.FC<RangeProps>;

type CheckboxProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Style?: 'solid' | 'outline';
    Disabled?: boolean;
    name?: string;
    id?: string;
    value?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Checkbox: React.FC<CheckboxProps>;

type RadioProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Disabled?: boolean;
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
