import colorThemes from "../../common/colorThemes";
import { Icons } from '../../common/Icons';
export type ButtonProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'medium' | 'large';
    Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
    IconType?: keyof typeof Icons;
};
export declare function validateButtonProps(props: ButtonProps): void;
