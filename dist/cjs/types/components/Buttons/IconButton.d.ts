import React from 'react';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';
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
