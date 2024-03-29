import styled from '@emotion/styled'
import colorThemes from '../../common/colorThemes';
import React from 'react';
import { validateControlProps } from './propValidation';

type RangeProps = {
    Color?: keyof typeof colorThemes;
    Size?: 'small' | 'large';
    Disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    id?: string;
    name?: string;
    list?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  const getTheme = (RangeColor: keyof typeof colorThemes) => colorThemes [RangeColor];

  const DisabledStyle = (props: RangeProps) => `
  ${props.Disabled ? 'opacity: 0.5; cursor: default; pointer-events: none;' : ''}
`;

const RangeInput = styled.input<RangeProps>`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: ${(props) => props.Size === 'small' ? '.7em' : '1.2em'};
    background: ${props => getTheme(props.Color || 'indigo').primaryShade};
    outline: none; 
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3)inset;
    border-radius: 10px;
    ${DisabledStyle}
    
    &:focus-visible::-webkit-slider-thumb {
      outline: max(2px, 0.2em) solid ${props => getTheme(props.Color || 'indigo').primaryShade};
      outline-offset: max(2px, 0.15em);
  }
    &:focus-visible::-moz-range-thumb {
      outline: max(2px, 0.2em) solid ${props => getTheme(props.Color || 'indigo').primaryShade};
      outline-offset: max(2px, 0.15em);
    }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${(props) => props.Size === 'small' ? '2em' : '3.2em'};
    height: ${(props) => props.Size === 'small' ? '2em' : '3.2em'};
    background: ${props => getTheme(props.Color || 'indigo').secondaryShade};
    cursor: pointer;
    border: 2px solid ${props => getTheme(props.Color || 'indigo').primaryShade};
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
  }
  
  &::-moz-range-thumb {
    width: ${(props) => props.Size === 'small' ? '2em' : '3.2em'};
    height: ${(props) => props.Size === 'small' ? '2em' : '3.2em'};
    background: ${props => getTheme(props.Color || 'indigo').secondaryShade};
    cursor: pointer;
    border: 2px solid ${props => getTheme(props.Color || 'indigo').primaryShade};
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
  }
  `;
  const Range: React.FC<RangeProps> = (props) => { 
    validateControlProps(props);
    const {
    Color = 'indigo',
    Size = 'small',
    min, 
    max, 
    step, 
    value, 
    name, 
    id,
    list,
    label ='range',
    Disabled = false,
    onChange,
  } = props;
  return (
      <RangeInput
      Color={Color}
      Size={Size}
      Disabled={Disabled}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        name={name}
        list={list}
        id={id}
        aria-label={label}
        onChange={onChange}
      />
    );
  };
  export default Range