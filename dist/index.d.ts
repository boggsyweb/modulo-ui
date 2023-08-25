import React from 'react';

declare const colorThemes: {
    red: {
        backgroundColor: string;
        textColor: string;
    };
    pink: {
        backgroundColor: string;
        textColor: string;
    };
    orange: {
        backgroundColor: string;
        textColor: string;
    };
    yellow: {
        backgroundColor: string;
        textColor: string;
    };
    green: {
        backgroundColor: string;
        textColor: string;
    };
    teal: {
        backgroundColor: string;
        textColor: string;
    };
    blue: {
        backgroundColor: string;
        textColor: string;
    };
    cyan: {
        backgroundColor: string;
        textColor: string;
    };
    indigo: {
        backgroundColor: string;
        textColor: string;
    };
    purple: {
        backgroundColor: string;
        textColor: string;
    };
    gray: {
        backgroundColor: string;
        textColor: string;
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
    onClick?: () => void;
};
declare const Button: React.FC<ButtonProps>;

export { Button };
