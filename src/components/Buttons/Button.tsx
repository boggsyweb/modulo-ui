import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';

type ButtonProps = {
  Color?: keyof typeof colorThemes;
  Size?: 'small' | 'medium' | 'large';
  Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
  Icon?: boolean;
  IconType?: keyof typeof Icons;
  IconPosition?: 'left' | 'right';
  Oval?: boolean;
  Disabled?: boolean;
  ButtonLabel?: string;
  isFirst?: boolean;
  isLast?: boolean;
  onClick?: () => void;
};

const buttonConfig = {
  small: { fontSize: '1rem', padding: '8px 16px', iconSize: '20px' },
  medium: { fontSize: '1.2rem', padding: '10px 18px', iconSize: '24px' },
  large: { fontSize: '1.32rem', padding: '10px 18px', iconSize: '28px' },
};

const getTheme = (Color: keyof typeof colorThemes) => colorThemes[Color];

const getSizeConfig = (Size: ButtonProps['Size'] = 'medium') =>
  buttonConfig[Size];

const getStyle = (props: ButtonProps, theme: any) => {
  const { Style, Disabled } = props;
  const { padding } = getSizeConfig(props.Size);

  let styles = `
    background-color: ${theme.primaryShade};
    color: ${theme.secondaryShade};
    padding: ${padding};
    border: 1.5px solid transparent;
   
    ${Disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
  `;

  switch (Style) {
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
      if (Style === 'ghostHover') {
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
    props.isFirst && props.isLast ? (props.Oval ? '100px' : '5px') : '0'};
  cursor: pointer;
  font-size: ${(props) => getSizeConfig(props.Size).fontSize};
  ${(props) => {
    const theme = getTheme(props.Color || 'indigo');
    return getStyle(props, theme);
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
    Color = 'indigo',
    Size = 'medium',
    Style = 'solid',
    Icon = false,
    IconType = 'search',
    IconPosition = 'left',
    Oval = false,
    Disabled = false,
    isFirst = true,
    isLast = true,
    ButtonLabel,
    onClick,
  } = props;

  const IconComponent = Icon && IconType && Icons[IconType];

  return (
    <StyledButton
      {...props}
      Color={Color}
      Style={Style}
      Size={Size}
      Oval={Oval}
      Disabled={Disabled}
      isFirst={isFirst}
      isLast={isLast}
      onClick={onClick}
    >
      {IconPosition === 'left' && IconComponent && renderIcon(getSizeConfig(Size).iconSize, IconComponent)}
      {ButtonLabel}
      {IconPosition === 'right' && IconComponent && renderIcon(getSizeConfig(Size).iconSize, IconComponent)}
    </StyledButton>
  );
};

export default Button;
