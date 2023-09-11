import React from 'react';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';
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
export default Button;
