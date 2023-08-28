import React from 'react';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';
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
export default ButtonGroup;
