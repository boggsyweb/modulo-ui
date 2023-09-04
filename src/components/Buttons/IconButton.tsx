import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';
import Button from './Button';

type IconButtonProps = {
  buttonColor?: keyof typeof colorThemes;
  buttonSize?: 'small' | 'medium' | 'large';
  buttonStyle?: 'solid' | 'outline' | 'ghostHover' ;
  iconStyle?: keyof typeof Icons;
  disabled?: boolean;
  icon?: boolean;
  onClick?: () => void;
}

const Icon = styled(Button)<IconButtonProps>`
    display: grid;
    justify-items: center;
    align-items: center;
    padding: .5rem;
    border-radius: 50px;
`;

const IconButton: React.FC<IconButtonProps> = ({
    buttonColor = 'indigo',
    buttonSize = 'medium',
    buttonStyle = 'solid',
    icon = true,
    iconStyle ='settings',
    disabled = false,
}: IconButtonProps) => {

    return (
        <Icon 
        buttonColor={buttonColor}
        buttonSize={buttonSize}
        buttonStyle={buttonStyle}
        iconStyle={iconStyle}
        icon={icon}
        disabled={disabled}
        />
    )
}
export default IconButton