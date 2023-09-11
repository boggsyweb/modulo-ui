import React from "react";
import styled from "@emotion/styled";
import colorThemes from "../../common/colorThemes";

type RadioProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getTheme = (RadioColor: keyof typeof colorThemes) => colorThemes[RadioColor];

const DisabledStyle = (props: RadioProps) => `
  ${props.Disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
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
    width: ${(props) => props.Size === 'small' ? '1.15em' : '1.32em'} ;
    height: ${(props) => props.Size === 'small' ? '1.15em' : '1.32em'} ;
    border-radius: 50px;
    border: .2em solid ${props => getTheme(props.Color || 'indigo').primaryShade};
    

    &::before {
        content: "";

    }
    &:checked {
        background-color: ${props => getTheme(props.Color || 'indigo').primaryShade};
    }
    &:focus {
        outline: max(2px, 0.2em) solid ${props => getTheme(props.Color || 'indigo').primaryShade};
        outline-offset: max(2px, 0.15em);
    }
`;

const Radio: React.FC<RadioProps> = ({
    Color = 'indigo',
    Size = 'small',
    Disabled,
    name,
    id,
    label,
    value,
    onChange,
}: RadioProps) => {


return (
    <div>
        <RadioLabel
        Disabled={Disabled}
        >
            {label}
            <RadioInput
            Color={Color}
            Size={Size}
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