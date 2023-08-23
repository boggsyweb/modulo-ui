import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';

type ButtonProps = {
  buttonColor?: keyof typeof colorThemes;
  buttonSize?: 'small' | 'medium' | 'large';
  buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
  icon?: boolean;
  iconStyle?: keyof typeof Icons;
  iconPosition?: 'left' | 'right';
  oval?: boolean;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
};

const getTheme = (buttonColor: keyof typeof colorThemes) => colorThemes[buttonColor];

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${(props) => {
    if (props.buttonSize === 'small') return '1rem';
    if (props.buttonSize === 'medium') return '1.2rem';
    if (props.buttonSize === 'large') return '1.32rem';
    return '1rem'; 
  }};
  ${(props) => {
    const theme = getTheme(props.buttonColor as keyof typeof colorThemes);
    const padding = props.buttonSize === 'small' ? '8px 16px' : '10px 18px';
    const borderRadius = props.oval ? '100px' : '5px';
    const disabledStyles = props.disabled
      ? `
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      `
      : '';

    if (props.buttonStyle === 'outline') {
      return `
        background-color: transparent;
        border: 1.5px solid ${theme.backgroundColor};
        color: ${theme.backgroundColor};
        padding: ${padding};
        border-radius: ${borderRadius};
        ${disabledStyles}
      `;
    }
    if (props.buttonStyle === 'ghostHover') {
      return `
        background-color: rgba(${theme.backgroundColor}, 0);
        color: ${theme.backgroundColor};
        &:hover {
          background-color: rgba(${theme.backgroundColor}, 0.4);
        }
        padding: ${padding};
        border-radius: ${borderRadius};
        ${disabledStyles}
      `;
    }
    if (props.buttonStyle === 'link') {
      return `
        background-color: transparent;
        color: ${theme.backgroundColor};
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        padding: ${padding};
        border-radius: ${borderRadius};
        ${disabledStyles}
      `;
    }
  
    return `
      background-color: ${theme.backgroundColor};
      color: ${theme.textColor};
      padding: ${padding};
      border-radius: ${borderRadius};
      ${disabledStyles}
    `;
  }}
`;

const Button: React.FC<ButtonProps> = ({
  buttonColor = 'indigo',
  buttonSize = 'medium',
  buttonStyle = 'solid',
  icon = false,
  iconStyle = 'search',
  iconPosition = 'left',
  oval = false,
  disabled = false,
  label,
  onClick,
}: ButtonProps) => {

    const IconComponent = icon && iconStyle && Icons[iconStyle];
    const iconSize = buttonSize === 'small' ? '20px' : buttonSize === 'medium' ? '24px' : '28px';


  return (
    <StyledButton 
    buttonColor={buttonColor} 
    buttonStyle={buttonStyle} 
    buttonSize={buttonSize} 
    oval={oval} 
    disabled={disabled} 
    onClick={onClick}>
     {iconPosition === 'left' && IconComponent && (
        <span style={{ width: iconSize, height: iconSize, marginRight: '0.5rem' }}>
          <IconComponent />
        </span>
      )}   
      {label}
      {iconPosition === 'right' && IconComponent && (
        <span style={{ width: iconSize, height: iconSize, marginLeft: '0.5rem' }}>
          <IconComponent />
        </span>
      )}
    </StyledButton>
  );
};

export default Button;
