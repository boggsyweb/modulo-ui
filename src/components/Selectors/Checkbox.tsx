import React from "react";
import styled from "@emotion/styled";
import colorThemes from "../../common/colorThemes";

type CheckboxProps = {
    CheckboxColor?: keyof typeof colorThemes;
    CheckboxSize?: 'small' | 'large';
    CheckboxStyle?: 'solid' | 'outline';
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const getTheme = (CheckboxColor: keyof typeof colorThemes) => colorThemes [CheckboxColor];

const DisabledStyle = (props: CheckboxProps) => `
  ${props.disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
`;

const CheckboxContainer = styled.div`
display: flex;
align-items: center;
`;
const CheckboxLabel = styled.label<CheckboxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    cursor: pointer;
    ${DisabledStyle}

`;
const CheckboxInput = styled.input<CheckboxProps>`
    -webkit-appearance: none;
    appearance: none;
    display: grid;
    place-content: center;
    font: inherit;
    margin: 0;
    width: ${(props) => props.CheckboxSize === 'small' ? '1.15em' : '1.32em'} ;
    height: ${(props) => props.CheckboxSize === 'small' ? '1.15em' : '1.32em'} ;
    border-radius: 0.15em;
    transform: translateY(-0.1em);
    border: .15em solid ${props => getTheme(props.CheckboxColor || 'indigo').primaryShade};


&:before {
    content: "";
    width: ${(props) => props.CheckboxSize === 'small' ? '0.65em' : '0.74em'};
    height: ${(props) => props.CheckboxSize === 'small' ? '0.65em' : '0.74em'};
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1.5em 1.5em ${props => props.CheckboxStyle === 'solid' ? getTheme(props.CheckboxColor || 'indigo').secondaryShade : getTheme(props.CheckboxColor || 'indigo').primaryShade};
    

}
&:checked {
    position: relative;
    background-color: ${(props) => props.CheckboxStyle === 'solid' ? getTheme(props.CheckboxColor || 'indigo').primaryShade : 'transparent'};

}
&:checked::before {
    transform: scale(1);
}
&:focus &:hover{
    outline: max(2px, 0.15em) solid ${props => getTheme(props.CheckboxColor || 'indigo').primaryShade};
    outline-offset: max(2px, 0.15em);
}

`;

const Checkbox: React.FC<CheckboxProps> = ({ 
    CheckboxColor = 'indigo',
    CheckboxSize = 'small',
    CheckboxStyle = 'outline',
    disabled,
    name, 
    id,
    label,
    onChange,
}: CheckboxProps) => {


  return (
    <CheckboxContainer>
      <CheckboxLabel
        disabled={disabled}
        >
          {label}
        <CheckboxInput
        CheckboxColor={CheckboxColor}
        CheckboxSize={CheckboxSize}
        CheckboxStyle={CheckboxStyle}
        type="checkbox" 
        name={name}
        id={id}
        onChange={onChange} 
         />
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
