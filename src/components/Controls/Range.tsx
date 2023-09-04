import styled from '@emotion/styled'
import colorThemes from '../colorThemes';
import React from 'react';

type RangeProps = {
    RangeColor?: keyof typeof colorThemes;
    RangeSize?: 'small' | 'large';
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    id?: string;
    name?: string;
    list?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  const getTheme = (RangeColor: keyof typeof colorThemes) => colorThemes [RangeColor];

  const DisabledStyle = (props: RangeProps) => `
  ${props.disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
`;

const RangeInput = styled.input<RangeProps>`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: ${(props) => props.RangeSize === 'small' ? '.7em' : '1.2em'};
    background: ${props => getTheme(props.RangeColor || 'indigo').primaryShade};
    outline: none; 
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3)inset;
    border-radius: 10px;
    ${DisabledStyle}

  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${(props) => props.RangeSize === 'small' ? '2em' : '3.2em'};
    height: ${(props) => props.RangeSize === 'small' ? '2em' : '3.2em'};
    background: ${props => getTheme(props.RangeColor || 'indigo').secondaryShade};
    cursor: pointer;
    border: 2px solid ${props => getTheme(props.RangeColor || 'indigo').primaryShade};
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    border-radius: 50px;

  }
  &::-moz-range-thumb {
    appearance: none;
    width: ${(props) => props.RangeSize === 'small' ? '2em' : '3.2em'};
    height: ${(props) => props.RangeSize === 'small' ? '2em' : '3.2em'};
    background: ${props => getTheme(props.RangeColor || 'indigo').secondaryShade};
    cursor: pointer;
    border: 2px solid ${props => getTheme(props.RangeColor || 'indigo').primaryShade};
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    border-radius: 50px;

  }
  `;
  const Range: React.FC<RangeProps> = ({ 
    RangeColor = 'indigo',
    RangeSize = 'small',
    min, 
    max, 
    step, 
    value, 
    name, 
    id,
    list,
    disabled = false,
    onChange,
}) => {
    return (
      <RangeInput
      RangeColor={RangeColor}
      RangeSize={RangeSize}
      disabled={disabled}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        name={name}
        list={list}
        id={id}
        onChange={onChange}
      />
    );
  };
  export default Range