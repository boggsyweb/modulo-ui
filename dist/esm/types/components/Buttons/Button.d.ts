import React from 'react';
import colorThemes from '../colorThemes';
type ButtonProps = {
    themeName?: keyof typeof colorThemes;
    label?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
