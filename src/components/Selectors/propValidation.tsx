import colorThemes from "../../common/colorThemes";

type InputProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Style?: 'solid' | 'outline';
}

export function validateInputProps(props:InputProps): void {
    const {Color, Size, Style} = props;

    if (Color && !isValidColor(Color)) {
        console.warn(`Warning: Invalid Color prop '${Color}' for input component.`);
    }
    if (Size && !isValidSize(Size)) {
        console.warn(`Warning: Invalid Size prop '${Size}' for input component.`);
    }
    if (Style && !isValidStyle(Style)) {
        console.warn(`Warning: Invalid Style prop '${Style}' for input component.`);
    }
}
function isValidColor(Color: InputProps['Color'] | undefined): boolean {
    return !!Color && colorThemes[Color] !== undefined;
}
function isValidSize(Size: string | undefined): boolean {
    return ['small', 'large'].includes(Size || '');
}
function isValidStyle(Style: string | undefined): boolean {
    return ['solid', 'outline'].includes(Style || '');
}