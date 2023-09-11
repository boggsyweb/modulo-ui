import React from "react";
import colorThemes from "../../common/colorThemes";
type CheckboxProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Style?: 'solid' | 'outline';
    Disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
