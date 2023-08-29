import React from "react";
import colorThemes from "../colorThemes";
type ToggleProps = {
    ToggleColor?: keyof typeof colorThemes;
    ToggleSize?: 'small' | 'large';
    OutsideText?: boolean;
    OutsideLeft?: string;
    OutsideRight?: string;
    disabled?: boolean;
    onChange?: () => void;
};
declare const ToggleSwitch: React.FC<ToggleProps>;
export default ToggleSwitch;
