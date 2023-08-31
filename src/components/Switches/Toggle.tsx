import styled from "@emotion/styled";
import React, { useState } from "react";
import colorThemes from "../colorThemes";

type ToggleProps = {
  ToggleColor?: keyof typeof colorThemes;
  ToggleSize?: 'small' | 'large';
  ToggleStyle?: 'oval' | 'rectangle';
  OutsideText?: boolean;
  OutsideLeft?: string;
  OutsideRight?: string;
  disabled?: boolean;
  // toggleIcons?: boolean;
  onChange?: () => void;
};


const getTheme = (ToggleColor: keyof typeof colorThemes) => colorThemes[ToggleColor];


const commonToggleStyles = (props: ToggleProps) => `
  background-color: ${getTheme(props.ToggleColor || 'indigo').primaryShade};
  ${props.disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ToggleLabel = styled.label<ToggleProps>`
display: flex;
align-items: center;
gap: 0.53em;
cursor: pointer;
`;

const ToggleInput = styled.input<ToggleProps>`
  display: none;

  &:checked + span::before {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: ${(props) => props.ToggleSize === 'small' ? 'translate(1.7em, -50%)' : 'translate(1.95em, -50%)'};
        background-color: #F5F5F5;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ToggleButton = styled.span<ToggleProps>`
    position: relative;
    width: ${(props) => props.ToggleSize === 'small' ? '3.2em' : '3.68em'};
    height: ${(props) => props.ToggleSize === 'small' ? '1.48em' : '1.7em'};
    border-radius: ${(props) => props.ToggleStyle === 'oval' ? '2em' : '5px'};
    padding: 4px;
    transition: 300ms all;
    ${commonToggleStyles}

  
  &::before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: ${(props) => props.ToggleSize === 'small' ? '1.48em' : '1.7em'};
    height: ${(props) => props.ToggleSize === 'small' ? '1.48em' : '1.7em'};
    border-radius: ${(props) => props.ToggleStyle === 'oval' ? '2em' : '5px'};
    top: 50%;
    left: 4px;
    background: #333333;
    transform: translate(0, -50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
const StyledText = styled.span`
  font-family: inherit;
  color: inherit;
`;


const ToggleSwitch: React.FC<ToggleProps> = ({
  ToggleColor = 'indigo',
  ToggleSize = 'small',
  ToggleStyle = 'oval',
  OutsideText = false,
  OutsideLeft = 'on',
  OutsideRight = 'off',
  disabled = false,
  // toggleIcons = false,
  onChange,
}: ToggleProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    if (onChange) {
      onChange();
    }
  };

  return (
    <ToggleWrapper>
          {OutsideText && <StyledText>{OutsideLeft}</StyledText>}
    <ToggleLabel
    disabled={disabled}
    >
      <ToggleInput
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        ToggleSize={ToggleSize}
        disabled={disabled}
      />
      <ToggleButton 
      ToggleColor={ToggleColor}
      ToggleSize={ToggleSize}
      disabled={disabled}
      ToggleStyle={ToggleStyle}
      />
    </ToggleLabel>
          {OutsideText && <StyledText>{OutsideRight}</StyledText>}
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
