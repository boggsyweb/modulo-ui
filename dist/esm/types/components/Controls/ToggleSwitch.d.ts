import React from "react";
import colorThemes from "../../common/colorThemes";
type ToggleProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Style?: 'oval' | 'rectangle';
    OutsideText?: boolean;
    OutsideLeft?: string;
    OutsideRight?: string;
    Disabled?: boolean;
    onChange?: () => void;
};
declare const ToggleSwitch: React.FC<ToggleProps>;
export default ToggleSwitch;
