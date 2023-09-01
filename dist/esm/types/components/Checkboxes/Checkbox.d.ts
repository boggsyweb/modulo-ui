import React from "react";
import colorThemes from "../colorThemes";
type CheckboxProps = {
    CheckboxColor?: keyof typeof colorThemes;
    CheckboxSize?: 'small' | 'large';
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
    onChange?: () => void;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
