import colorThemes from '../../common/colorThemes';
import React from 'react';
type RangeProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    id?: string;
    name?: string;
    list?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Range: React.FC<RangeProps>;
export default Range;
