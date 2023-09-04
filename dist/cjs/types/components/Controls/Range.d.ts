import colorThemes from '../colorThemes';
import React from 'react';
type RangeProps = {
    RangeColor?: keyof typeof colorThemes;
    RangeSize?: 'small' | 'large';
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    id?: string;
    name?: string;
    list?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Range: React.FC<RangeProps>;
export default Range;
