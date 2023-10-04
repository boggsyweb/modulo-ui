import styled from "@emotion/styled";
import React, { useState } from "react";
import colorThemes from "../../common/colorThemes";
import { validateControlProps } from "./propValidation";

type ToggleProps = {
  Color?: keyof typeof colorThemes;
  Size?: 'small' | 'large';
  Style?: 'oval' | 'rectangle';
  OutsideText?: boolean;
  OutsideLeft?: string;
  OutsideRight?: string;
  Disabled?: boolean;
  onChange?: () => void;
};

const getTheme = (Color: keyof typeof colorThemes) => colorThemes [Color];

const DisabledStyle = (props: ToggleProps) => `
  ${props.Disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ToggleLabel = styled.label<ToggleProps>`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
${DisabledStyle}

&:focus-visible {
  outline: max(2px, 0.15em) solid ${props => getTheme(props.Color || 'indigo').secondaryShade};
  outline-offset: max(2px, 0.15em);
}
`;

const ToggleInput = styled.input<ToggleProps>`
  appearance: none;

  &:checked + span::before {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: ${(props) => props.Size === 'small' ? 'translate(1.7em, -50%)' : 'translate(1.95em, -50%)'};
        background-color: #F5F5F5;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  &:focus-visible + span::before {
    outline: max(2px, 0.15em) solid ${props => getTheme(props.Color || 'indigo').secondaryShade};
    outline-offset: max(2px, 0.15em);
  }
`;

const ToggleButton = styled.span<ToggleProps>`
    position: relative;
    width: ${(props) => props.Size === 'small' ? '3.2em' : '3.68em'};
    height: ${(props) => props.Size === 'small' ? '1.48em' : '1.7em'};
    border-radius: ${(props) => props.Style === 'oval' ? '2em' : '5px'};
    padding: 4px;
    transition: 300ms all;
    background-color: ${props => getTheme(props.Color || 'indigo').primaryShade};

  &::before {
    content: "";
    position: absolute;
    border: 1px solid #707070;
    width: ${(props) => props.Size === 'small' ? '1.48em' : '1.7em'};
    height: ${(props) => props.Size === 'small' ? '1.48em' : '1.7em'};
    border-radius: ${(props) => props.Style === 'oval' ? '2em' : '5px'};
    top: 50%;
    left: 4px;
    background: #333333;
    transform: translate(0, -50%);
    transition: 300ms all;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

`;
const StyledText = styled.span`
  font-family: inherit;
  color: inherit;
`;

const ToggleSwitch: React.FC<ToggleProps> = (props) => {
  validateControlProps(props)
  const {
  Color = 'indigo',
  Size = 'small',
  Style = 'oval',
  OutsideText = false,
  OutsideLeft = 'on',
  OutsideRight = 'off',
  Disabled = false,
  onChange,
} = props;
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
    Disabled={Disabled}
    Color={Color}
    >
      <ToggleInput
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        Color={Color}
        Size={Size}
      />
      <ToggleButton 
      Color={Color}
      Size={Size}
      Style={Style}
      />
    </ToggleLabel>
          {OutsideText && <StyledText>{OutsideRight}</StyledText>}
    </ToggleWrapper>
  );
};

export default ToggleSwitch;