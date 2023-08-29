import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../colorThemes';
import Button from '../Buttons/Button';

type CardProps = {
    title?: boolean;
    CardTitle?: string;
    subtitle?: boolean;
    CardSubtitle?: string;
    description?: boolean;
    CardDescription?: string;
    CardStyle?: 'standard' | 'border' | 'shadow';
    CardSize?: 'small' | 'medium' | 'large' ;
    image?: boolean;
    ImageAlt?: string;
    ImageSrc?: string;
    caption?: boolean;
    ImageCaption?: string;
    divider?: boolean;
    buttons?: boolean;
    buttonStyle?: 'solid' | 'outline' | 'ghostHover' | 'link';
    buttonLabels?: string[];
    buttonColor?: keyof typeof colorThemes;
    onClick?: (index: number) => void;
  };
  
  const CardContainer = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    background-color: var(--background-color, #f5f5f5);
    color: var(--color, #333333);
    border-radius: 5px;
    padding: 1em;
    @media (prefers-color-scheme: dark) {
      --background-color: #333333;
      --color: #f5f5f5;
      --box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.5);
      --border: 1.5px solid #545c65;
    }

    h2 {
      margin: 1rem 0 0;
    }
    h3 {
      margin: .5rem 0;
    }
    width: ${(props) => {
      if (props.CardSize === 'small') return '16.6em'; 
      if (props.CardSize === 'medium') return '21.9em'; 
      if (props.CardSize === 'large') return '37.5em'; 

    }};
    ${({ CardStyle }) => {
      if (CardStyle === 'border') {
        return `
          border: var(--border, 1.5px solid #ccc);
        `;
      } else if (CardStyle === 'shadow') {
        return `
        box-shadow: var(--box-shadow, 1px 1px 4px 1px rgba(0, 0, 0, 0.25));
        `;
      }
      return '';
    }}
    ${({ CardSize }) => {
      if (CardSize === 'small') {
        return `
          font-size: 0.85rem;
        `;
      } else if (CardSize === 'medium') {
        return `
          font-size: 1rem;
        `;
      } else if (CardSize === 'large') {
        return `
          font-size: 1.3rem;
        `;
      }
      return '';
    }}
  `;
  const ImageContainer = styled.div`
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  p {
    margin: .2rem 0;
    font-style: italic;
    opacity: 0.8;
  }
`;
const Divider = styled.hr`
  margin: 1em 0 0;
  height: 1.5px;
  border: none;
  background-color: #ccc;
`;
const ButtonsContainer = styled.div`
  display: flex;
  // justify-content: space-around;
  gap: 1rem;
  padding-top: .8rem;
  border-top: 1.5px solid #ccc;
`;
  
  const Card: React.FC<CardProps> = ({
    title = true,
    CardTitle,
    subtitle = true,
    CardSubtitle,
    description = true,
    CardDescription,
    CardStyle = 'standard',
    CardSize = 'medium',
    image = false,
    ImageSrc,
    ImageAlt,
    caption = false,
    ImageCaption,
    divider = false,
    buttons = false,
    buttonStyle = 'solid',
    buttonColor = 'indigo',
    buttonLabels = [],
    onClick
  }: CardProps) => {
    const limitedButtonLabels = buttonLabels.slice(0, 2);

    return (
      <CardContainer 
      CardStyle={CardStyle} 
      CardSize={CardSize}
      CardTitle={CardTitle}
      CardSubtitle={CardSubtitle}
      CardDescription={CardDescription}
      ImageAlt={ImageAlt} 
      ImageSrc={ImageSrc}
      ImageCaption={ImageCaption}
      >
        {image && (
        <ImageContainer>
          <img src={ImageSrc} alt={ImageAlt} />
          {caption && <p>{ImageCaption}</p>}
        </ImageContainer>
         )}
        {divider && image && <Divider />}
        {title && <h2>{CardTitle}</h2>}
        {subtitle && <h3>{CardSubtitle}</h3>}
        {description && <p>{CardDescription}</p>}
        {buttons && limitedButtonLabels.length > 0 && (
        <ButtonsContainer>
          {limitedButtonLabels.map((label, index) => (
            <Button
              key={index}
              label={label}
              buttonColor={buttonColor}
              buttonSize={CardSize}
              buttonStyle={buttonStyle}
              onClick={() => onClick && onClick(index)}
              />
          ))}
        </ButtonsContainer>
          )}
      </CardContainer>
    );
  };
  
  export default Card;
  