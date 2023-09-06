import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';

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
  isFirst?: boolean;
  isLast?: boolean;
  onClick?: () => void;
};

const buttonConfig = {
  small: { fontSize: '1rem', padding: '8px 16px', iconSize: '20px' },
  medium: { fontSize: '1.2rem', padding: '10px 18px', iconSize: '24px' },
  large: { fontSize: '1.32rem', padding: '10px 18px', iconSize: '28px' },
};

const getTheme = (buttonColor: keyof typeof colorThemes) => colorThemes[buttonColor];

const getButtonSizeConfig = (buttonSize: ButtonProps['buttonSize'] = 'medium') =>
  buttonConfig[buttonSize];

const getButtonStyle = (props: ButtonProps, theme: any) => {
  const { buttonStyle, disabled } = props;
  const { padding } = getButtonSizeConfig(props.buttonSize);

  let styles = `
    background-color: ${theme.primaryShade};
    color: ${theme.secondaryShade};
    padding: ${padding};
   
    ${disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
  `;

  switch (buttonStyle) {
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
      if (buttonStyle === 'ghostHover') {
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

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: space-around;
  font-family: inherit;
  border: none;
  border-radius: ${(props) =>
    props.isFirst && props.isLast ? (props.oval ? '100px' : '5px') : '0'};
  cursor: pointer;
  font-size: ${(props) => getButtonSizeConfig(props.buttonSize).fontSize};
  ${(props) => {
    const theme = getTheme(props.buttonColor || 'indigo');
    return getButtonStyle(props, theme);
  }};
`;

const IconWrapper = styled.span<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const renderIcon = (size: string, IconComponent: React.ElementType) => (
  <IconWrapper size={size}>
    <IconComponent />
  </IconWrapper>
);

const Button: React.FC<ButtonProps> = (props) => {
  const {
    buttonColor = 'indigo',
    buttonSize = 'medium',
    buttonStyle = 'solid',
    icon = false,
    iconStyle = 'search',
    iconPosition = 'left',
    oval = false,
    disabled = false,
    isFirst = true,
    isLast = true,
    label,
    onClick,
  } = props;

  const IconComponent = icon && iconStyle && Icons[iconStyle];

  return (
    <StyledButton
      {...props}
      buttonColor={buttonColor}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      oval={oval}
      disabled={disabled}
      isFirst={isFirst}
      isLast={isLast}
      onClick={onClick}
    >
      {iconPosition === 'left' && IconComponent && renderIcon(getButtonSizeConfig(buttonSize).iconSize, IconComponent)}
      {label}
      {iconPosition === 'right' && IconComponent && renderIcon(getButtonSizeConfig(buttonSize).iconSize, IconComponent)}
    </StyledButton>
  );
};

export default Button;
