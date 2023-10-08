import React from 'react';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';
type IconButtonProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'medium' | 'large';
    Style?: 'solid' | 'outline' | 'ghostHover';
    IconType?: keyof typeof Icons;
    Disabled?: boolean;
    Icon?: boolean;
    label?: string;
    onClick?: () => void;
};
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
