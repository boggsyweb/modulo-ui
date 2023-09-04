import React from 'react';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';
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
export default IconButton;
