import React from "react";
import colorThemes from "../../common/colorThemes";
type CheckboxProps = {
    CheckboxColor?: keyof typeof colorThemes;
    CheckboxSize?: 'small' | 'large';
    CheckboxStyle?: 'solid' | 'outline';
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
