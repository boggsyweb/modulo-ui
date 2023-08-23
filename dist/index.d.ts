import React from 'react';

declare const colorThemes: {
    red: {
        backgroundColor: string;
        textColor: string;
    };
    blue: {
        backgroundColor: string;
        textColor: string;
    };
};

type ButtonProps = {
    themeName?: keyof typeof colorThemes;
    label?: string;
};
declare const Button: React.FC<ButtonProps>;

export { Button };
