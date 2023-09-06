import React from "react";
import styled from "@emotion/styled";
import colorThemes from "../../common/colorThemes";

type RadioProps = {
    RadioColor?: keyof typeof colorThemes;
    RadioSize?: 'small' | 'large';
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getTheme = (RadioColor: keyof typeof colorThemes) => colorThemes[RadioColor];

const DisabledStyle = (props: RadioProps) => `
  ${props.disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
`;


const RadioLabel = styled.label<RadioProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    cursor: pointer;
    ${DisabledStyle};
`;

const RadioInput = styled.input<RadioProps>`
    appearance: none;
    margin: 0;
    width: ${(props) => props.RadioSize === 'small' ? '1.15em' : '1.32em'} ;
    height: ${(props) => props.RadioSize === 'small' ? '1.15em' : '1.32em'} ;
    border-radius: 50px;
    border: .2em solid ${props => getTheme(props.RadioColor || 'indigo').primaryShade};
    

    &::before {
        content: "";

    }
    &:checked {
        background-color: ${props => getTheme(props.RadioColor || 'indigo').primaryShade};
    }
    &:focus {
        outline: max(2px, 0.2em) solid ${props => getTheme(props.RadioColor || 'indigo').primaryShade};
        outline-offset: max(2px, 0.15em);
    }
`;

const Radio: React.FC<RadioProps> = ({
    RadioColor = 'indigo',
    RadioSize = 'small',
    disabled,
    name,
    id,
    label,
    value,
    onChange,
}: RadioProps) => {


return (
    <div>
        <RadioLabel
        disabled={disabled}
        >
            {label}
            <RadioInput
            RadioColor={RadioColor}
            RadioSize={RadioSize}
            type="radio"
            name={name}
            id={id}
            value={value}
            onChange={onChange} 
            />
        </RadioLabel>
    </div>
)
}
export default Radio