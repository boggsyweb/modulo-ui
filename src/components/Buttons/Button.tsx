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

const borderRadius = '5px';

const buttonConfig = {
  small: { fontSize: '1rem', padding: '8px 16px', iconSize: '20px' },
  medium: { fontSize: '1.2rem', padding: '10px 18px', iconSize: '24px' },
  large: { fontSize: '1.32rem', padding: '10px 18px', iconSize: '28px' },
};

const getTheme = (buttonColor: keyof typeof colorThemes) => colorThemes[buttonColor];

const getButtonStyle = (props: ButtonProps, theme: any) => {
  const sizeConfig = buttonConfig[props.buttonSize || 'medium'];
  let styles = `
    background-color: ${theme.primaryShade};
    color: ${theme.secondaryShade};
    padding: ${sizeConfig.padding};
    border-radius: ${props.oval ? '100px' : borderRadius};
    ${props.disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
  `;

  switch (props.buttonStyle) {
    case 'outline':
      styles += `
        background-color: transparent;
        border: 1.5px solid ${theme.primaryShade};
        color: ${theme.primaryShade};
      `;
      break;
    case 'ghostHover':
    case 'link':
      styles += `
        background-color: transparent;
        color: ${theme.primaryShade};
      `;
      if (props.buttonStyle === 'ghostHover') {
        styles += `
          &:hover { background-color: ${theme.hoverShade}; }
        `;
      } else {
        styles += `
          text-decoration: none;
          &:hover { text-decoration: underline; }
        `;
      }
      break;
    default:
      break;
  }

  return styles;
};

const renderIcon = (size: string, IconComponent: React.ElementType) => (
  <IconWrapper size={size}>
    <IconComponent />
  </IconWrapper>
);

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: space-around;
  font-family: inherit;
  border: none;
  border-radius: ${borderRadius};
  cursor: pointer;
  font-size: ${(props) => buttonConfig[props.buttonSize || 'medium'].fontSize};
  ${(props) => {
    const theme = getTheme(props.buttonColor || 'indigo');
    return getButtonStyle(props, theme);
  }};
`;

const IconWrapper = styled.span<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const Button: React.FC<ButtonProps> = ({
  buttonColor = 'indigo',
  buttonSize = 'medium',
  buttonStyle = 'solid',
  icon,
  iconStyle = 'search',
  iconPosition = 'left',
  oval,
  disabled,
  label,
  onClick,
}: ButtonProps) => {
  const IconComponent = icon && iconStyle && Icons[iconStyle];

  return (
    <StyledButton
      buttonColor={buttonColor}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      oval={oval}
      disabled={disabled}
      onClick={onClick}
    >
        {iconPosition === 'left' && IconComponent && renderIcon(buttonConfig[buttonSize || 'medium'].iconSize, IconComponent)}

      {label}
        {iconPosition === 'right' && IconComponent && renderIcon(buttonConfig[buttonSize || 'medium'].iconSize, IconComponent)}

    </StyledButton>
  );
};

export default Button;