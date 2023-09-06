import React from "react";
import colorThemes from "../../common/colorThemes";
type RadioProps = {
    RadioColor?: keyof typeof colorThemes;
    RadioSize?: 'small' | 'large';
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Radio: React.FC<RadioProps>;
export default Radio;
