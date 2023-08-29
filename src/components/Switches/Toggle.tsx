import styled from "@emotion/styled";
import React, { useState } from "react";
import colorThemes from "../colorThemes";

type ToggleProps = {
  ToggleColor?: keyof typeof colorThemes;
  ToggleSize?: 'small' | 'large';
  OutsideText?: boolean;
  OutsideLeft?: string;
  OutsideRight?: string;
  disabled?: boolean;
  // toggleIcons?: boolean;
  onChange?: () => void;
};

const getTheme = (ToggleColor: keyof typeof colorThemes) => colorThemes[ToggleColor];

const ToggleConfig = {
  small: { 
  buttonWidth: '3.2em',
  buttonHeight: '1.48em',
  toggleButtonBeforeWidth: '1.48em',
  toggleButtonBeforeHeight: '1.48em',
  translation: 'translate(1.7em, -50%)',
  gap: '0.53em',},

  large: { 
  buttonWidth: '3.75em',
  buttonHeight: '1.75em',
  toggleButtonBeforeWidth: '1.75em',
  toggleButtonBeforeHeight: '1.75em',
  translation: 'translate(2em, -50%)',
  gap: '0.625em',}
}
const getToggleStyle = (props: ToggleProps, theme: any) => {
  const SizeConfig = ToggleConfig[props.ToggleSize || 'small'];
  let styles = `
  background-color: ${theme.primaryShade};
  width: ${SizeConfig.buttonWidth}, ${SizeConfig.toggleButtonBeforeWidth};
  height ${SizeConfig.buttonHeight}, ${SizeConfig.toggleButtonBeforeHeight};
  transform: ${SizeConfig.translation};

  ${props.disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
  `;
  return styles
}

const ToggleLabel = styled.label<ToggleProps>`
display: flex;
align-items: center;
gap: ${(props) => ToggleConfig[props.ToggleSize || 'small'].gap};
cursor: pointer;
`;

const ToggleInput = styled.input<ToggleProps>`
  display: none;

  &:checked + span::before {
    transform: ${(props) => ToggleConfig[props.ToggleSize || 'small'].translation};
        background-color: #F5F5F5;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ToggleButton = styled.span<ToggleProps>`
position: relative;
width: ${(props) => ToggleConfig[props.ToggleSize || 'small'].buttonWidth};
height: ${(props) => ToggleConfig[props.ToggleSize || 'small'].buttonHeight};
border-radius: 2em;
padding: 4px;
transition: 300ms all;
${(props) => {
  const theme = getTheme(props.ToggleColor || 'indigo');
  return getToggleStyle(props, theme);
}};
  
  &::before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: ${(props) => ToggleConfig[props.ToggleSize || 'small'].toggleButtonBeforeWidth};
    height: ${(props) => ToggleConfig[props.ToggleSize || 'small'].toggleButtonBeforeHeight};
    border-radius: 50px;
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
const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ToggleSwitch: React.FC<ToggleProps> = ({
  ToggleColor = 'indigo',
  ToggleSize = 'small',
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
      />
    </ToggleLabel>
          {OutsideText && <StyledText>{OutsideRight}</StyledText>}
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
