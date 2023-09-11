import React from 'react';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';
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
export default ButtonGroup;
