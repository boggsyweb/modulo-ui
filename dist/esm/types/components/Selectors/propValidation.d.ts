import colorThemes from "../../common/colorThemes";
type InputProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Style?: 'solid' | 'outline';
};
export declare function validateInputProps(props: InputProps): void;
export {};
