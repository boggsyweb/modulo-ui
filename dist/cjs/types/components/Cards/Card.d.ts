import React from 'react';
import colorThemes from '../../common/colorThemes';
type CardProps = {
    Title?: string;
    Subtitle?: string;
    Description?: string;
    CardStyle?: 'standard' | 'border' | 'shadow';
    Image?: boolean;
    ImageAlt?: string;
    ImageSrc?: string;
    ImageCaption?: string;
    Divider?: boolean;
    Buttons?: boolean;
    Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
    Size?: 'small' | 'medium' | 'large';
    ButtonLabel?: string[];
    Color?: keyof typeof colorThemes;
    onClick?: (index: number) => void;
};
declare const Card: React.FC<CardProps>;
export default Card;
