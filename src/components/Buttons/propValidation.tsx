import colorThemes from "../../common/colorThemes";
import { Icons } from '../../common/Icons';

export type ButtonProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'medium' | 'large';
    Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
    IconType?: keyof typeof Icons;
}

export function validateButtonProps(props:ButtonProps): void {
    const {Color, Size, Style, IconType} = props;

    if (Color && !isValidColor(Color)) {
        console.warn(`Warning: Invalid Color prop '${Color}' for Button component.`);
    }
    if (Size && !isValidSize(Size)) {
        console.warn(`Warning: Invalid Size prop '${Size}' for Button component.`);
    }
    if (Style && !isValidStyle(Style)) {
        console.warn(`Warning: Invalid Style prop '${Style}' for Button component.`);
    }
    if (IconType && !isValidIconType(IconType)) {
        console.warn(`Warning: Invalid IconType prop '${IconType}' for Button component.`);
    }
}
function isValidColor(Color: ButtonProps['Color'] | undefined): boolean {
    return !!Color && colorThemes[Color] !== undefined;
}
function isValidStyle(Style: string | undefined): boolean {
    return ['solid', 'outline', 'ghostHover', 'link'].includes(Style || '');
}
function isValidSize(Size: string | undefined): boolean {
    return ['small', 'medium', 'large'].includes(Size || '');
}
function isValidIconType(IconType: ButtonProps['IconType'] | undefined): boolean {
    return !!IconType && Icons[IconType] !== undefined;
}