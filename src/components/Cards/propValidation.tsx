export type CardProps = {
    CardStyle?: 'standard' | 'border' | 'shadow';
    Size?: 'small' | 'medium' | 'large' ;
}

export function validateCardProps(props:CardProps): void {
    const {CardStyle, Size} = props;

    if (CardStyle && !isValidStyle(CardStyle)) {
        console.warn(`Warning: Invalid Size prop '${CardStyle}' for Card component.`);
    }
    if (Size && !isValidSize(Size)) {
        console.warn(`Warning: Invalid Size prop '${Size}' for Card component.`);
    }
}

function isValidStyle(CardStyle: string | undefined): boolean {
    return ['standard', 'border', 'shadow'].includes(CardStyle || '');
}
function isValidSize(Size: string | undefined): boolean {
    return ['small', 'medium', 'large'].includes(Size || '');
}

