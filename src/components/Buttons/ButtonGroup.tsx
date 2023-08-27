import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';

type buttonGroupProps = {
  buttonColor?: keyof typeof colorThemes;
  buttonSize?: 'small' | 'medium' | 'large';
  buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
  icon?: boolean;
  iconStyle?: keyof typeof Icons;
  iconPosition?: 'first' | 'last';
  ovalEnds?: boolean;
  disabled?: boolean;
  groupLength?: number;
  labels?: string[];
  onClick?: (index: number) => void;
};

const buttonConfig = {
  small: { fontSize: '1rem', padding: '8px 16px', iconSize: '20px' },
  medium: { fontSize: '1.2rem', padding: '10px 18px', iconSize: '24px' },
  large: { fontSize: '1.32rem', padding: '10px 18px', iconSize: '28px' },
};

const getTheme = (buttonColor: keyof typeof colorThemes) => colorThemes[buttonColor];

const StyledButton = styled.button<buttonGroupProps>`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: space-around;
  font-family: inherit;
  border: none;
  cursor: pointer;
  font-size: ${(props) => buttonConfig[props.buttonSize || 'medium'].fontSize};
  ${(props) => {
    const theme = getTheme(props.buttonColor || 'indigo');
    return `
      background-color: ${theme.primaryShade};
      color: ${theme.secondaryShade};
      padding: ${buttonConfig[props.buttonSize || 'medium'].padding};
      ${
        props.disabled
          ? 'opacity: 0.5; cursor: default; pointer-events: none;'
          : ''
      }
    `;
  }}
  ${(props) => {
    const theme = getTheme(props.buttonColor || 'indigo');
    switch (props.buttonStyle) {
      case 'outline':
        return `
          background-color: transparent;
          border: 1.5px solid ${theme.primaryShade};
          color: ${theme.primaryShade};
        `;
      case 'ghostHover':
      case 'link':
        let styles = `
          background-color: transparent;
          color: ${theme.primaryShade};
        `;
        switch (props.buttonStyle) {
          case 'ghostHover':
            styles += `
              &:hover { background-color: ${theme.hoverShade}; }
            `;
            break;
          case 'link':
            styles += `
              text-decoration: none;
              &:hover { text-decoration: underline; }
            `;
            break;
        }
        return styles;
      default:
        return '';
    }
  }}
`;

const ButtonArray = styled(StyledButton)<{ isFirst?: boolean; isLast?: boolean }>`
  border-radius: ${(props) =>
    props.isFirst ? (props.ovalEnds ? '100px 0 0 100px' : '5px 0 0 5px') : ''};
  border-radius: ${(props) =>
    props.isLast ? (props.ovalEnds ? '0 100px 100px 0' : '0 5px 5px 0') : ''};
`;

const IconWrapper = styled.span<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
  gap: 0.2em;
`;

const buttonGroup: React.FC<buttonGroupProps> = ({
  buttonColor = 'indigo',
  buttonSize = 'medium',
  buttonStyle = 'solid',
  icon,
  iconStyle = 'search',
  iconPosition = 'first',
  ovalEnds = false,
  disabled,
  groupLength = 2,
  labels = [],
  onClick,
}: buttonGroupProps) => {
  const IconComponent = icon && iconStyle && Icons[iconStyle];

  return (
    <ButtonGroupWrapper>
      {Array.from({ length: groupLength }, (_, index) => {
        const isFirst = index === 0;
        const isLast = index === groupLength - 1;

        return (
          <ButtonArray
            key={index}
            isFirst={isFirst}
            isLast={isLast}
            ovalEnds={ovalEnds}
            buttonColor={buttonColor}
            buttonStyle={buttonStyle}
            buttonSize={buttonSize}
            disabled={disabled}
            onClick={() => onClick && onClick(index)}
          >
            {IconComponent &&
              iconPosition === 'first' &&
              isFirst && (
                <IconWrapper
                  size={buttonConfig[buttonSize || 'medium'].iconSize}
                >
                  <IconComponent />
                </IconWrapper>
              )}
            {labels[index] || `Button ${index + 1}`}
            {IconComponent &&
              iconPosition === 'last' &&
              isLast && (
                <IconWrapper
                  size={buttonConfig[buttonSize || 'medium'].iconSize}
                >
                  <IconComponent />
                </IconWrapper>
              )}
          </ButtonArray>
        );
      })}
    </ButtonGroupWrapper>
  );
};

export default buttonGroup;
