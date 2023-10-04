import colorThemes from "../../common/colorThemes";

export type ControlProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
}

export function validateControlProps(props:ControlProps): void {
    const {Color, Size} = props;

    if (Color && !isValidColor(Color)) {
        console.warn(`Warning: Invalid Color prop '${Color}' for control component.`);
    }
    if (Size && !isValidSize(Size)) {
        console.warn(`Warning: Invalid Size prop '${Size}' for control component.`);
    }
}
function isValidColor(Color: ControlProps['Color'] | undefined): boolean {
    return !!Color && colorThemes[Color] !== undefined;
}
function isValidSize(Size: string | undefined): boolean {
    return ['small', 'large'].includes(Size || '');
}

