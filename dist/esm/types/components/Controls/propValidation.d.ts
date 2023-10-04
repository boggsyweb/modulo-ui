import colorThemes from "../../common/colorThemes";
export type ControlProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
};
export declare function validateControlProps(props: ControlProps): void;
