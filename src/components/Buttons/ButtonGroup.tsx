import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';
import Button from './Button';

type ButtonGroupProps = {
  buttonColor?: keyof typeof colorThemes;
  buttonSize?: 'small' | 'medium' | 'large';
  buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
  icon?: boolean;
  iconStyle?: keyof typeof Icons;
  iconPosition?: 'left' | 'right';
  oval?: boolean;
  disabled?: boolean;
  labels?: string[];
  onClick?: (index: number) => void;
};

const GroupContainer = styled.div`
  display: flex;
  gap: .2rem;
`;

const StyledButton = styled(Button)<ButtonGroupProps>`
  border-radius: ${(props) =>
    props.isFirst
      ? props.isLast
        ? props.oval
          ? '100px'
          : '5px'
        : props.oval
        ? '100px 0 0 100px'
        : '5px 0 0 5px'
      : props.isLast
      ? props.oval
        ? '0 100px 100px 0'
        : '0 5px 5px 0'
      : '0'};
`;


const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttonColor = 'indigo',
  buttonSize = 'medium',
  buttonStyle = 'solid',
  icon = false,
  iconPosition = 'left',
  iconStyle = 'search',
  oval = false,
  disabled = false,
  labels = [],
  onClick
}: ButtonGroupProps) => {
  const groupLength = labels.length;

  return (
    <GroupContainer>
      
      {labels.map((label, index) => (
        <StyledButton
        key={index}
        label={label}
        buttonSize={buttonSize}
        buttonStyle={buttonStyle}
        buttonColor={buttonColor}
        disabled={disabled}
        oval={oval}
        icon={icon}
        iconStyle={iconStyle}
        iconPosition={iconPosition}
        isFirst={index === 0 && groupLength > 1} 
          isLast={index === groupLength - 1 && groupLength > 1} 
        onClick={() => onClick && onClick(index)}
        labels={labels}
      />
    ))}
    </GroupContainer>
  );
};

export default ButtonGroup;
