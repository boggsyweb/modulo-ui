import React from 'react';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';
type buttonGroupProps = {
    buttonColor?: keyof typeof colorThemes;
    buttonSize?: 'small' | 'medium' | 'large';
    buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
    icon?: boolean;
    iconStyle?: keyof typeof Icons;
    iconPosition?: 'first' | 'last';
    ovalEnds?: boolean;
    disabled?: boolean;
    groupLength?: number;
    labels?: string[];
    onClick?: (index: number) => void;
};
declare const buttonGroup: React.FC<buttonGroupProps>;
export default buttonGroup;
