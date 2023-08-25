import React from 'react';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';
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
export default Button;
