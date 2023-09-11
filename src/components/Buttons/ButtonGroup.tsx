import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../../common/colorThemes';
import { Icons } from '../../common/Icons';
import Button from './Button';

type ButtonGroupProps = {
  Color?: keyof typeof colorThemes;
  Size?: 'small' | 'medium' | 'large';
  Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
  Icon?: boolean;
  IconType?: keyof typeof Icons;
  IconPosition?: 'left' | 'right';
  Oval?: boolean;
  Disabled?: boolean;
  GroupLabel?: string[];
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
        ? props.Oval
          ? '100px'
          : '5px'
        : props.Oval
        ? '100px 0 0 100px'
        : '5px 0 0 5px'
      : props.isLast
      ? props.Oval
        ? '0 100px 100px 0'
        : '0 5px 5px 0'
      : '0'};
`;


const ButtonGroup: React.FC<ButtonGroupProps> = ({
  Color = 'indigo',
  Size = 'medium',
  Style = 'solid',
  Icon = false,
  IconPosition = 'left',
  IconType = 'search',
  Oval = false,
  Disabled = false,
  GroupLabel = [],
  onClick
}: ButtonGroupProps) => {
  const groupLength = GroupLabel.length;

  return (
    <GroupContainer>
      
      {GroupLabel.map((label, index) => (
        <StyledButton
        key={index}
        Size={Size}
        Style={Style}
        Color={Color}
        Disabled={Disabled}
        Oval={Oval}
        IconType={IconType}
        IconPosition={IconPosition}
        isFirst={index === 0 && groupLength > 1} 
          isLast={index === groupLength - 1 && groupLength > 1} 
        onClick={() => onClick && onClick(index)}
        ButtonLabel={label}
        Icon={Icon && (
          (IconPosition === 'left' && index === 0) ||
          (IconPosition === 'right' && index === groupLength - 1)
        )}
      />
    ))}
    </GroupContainer>
  );
};

export default ButtonGroup;
