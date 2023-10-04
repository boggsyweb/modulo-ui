import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';
import Button from './Button';

type IconButtonProps = {
  Color?: keyof typeof colorThemes;
  Size?: 'small' | 'medium' | 'large';
  Style?: 'solid' | 'outline' | 'ghostHover' ;
  IconType?: keyof typeof Icons;
  Disabled?: boolean;
  Icon?: boolean;
  onClick?: () => void;
}

const IconStyled = styled(Button)<IconButtonProps>`
    display: grid;
    justify-items: center;
    align-items: center;
    padding: .5rem;
    border-radius: 50px;
`;

const IconButton: React.FC<IconButtonProps> = ({
    Color = 'indigo',
    Size = 'medium',
    Style = 'solid',
    Icon = true,
    IconType ='settings1',
    Disabled = false,
    onClick,
}: IconButtonProps) => {

    return (
        <IconStyled
        Color={Color}
        Size={Size}
        Style={Style}
        IconType={IconType}
        Icon={Icon}
        Disabled={Disabled}
        onClick={onClick}
        />
    )
}
export default IconButton