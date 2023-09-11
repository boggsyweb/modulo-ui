import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../../common/colorThemes';
import Button from '../Buttons/Button';

type CardProps = {
    Title?: string;
    Subtitle?: string;
    Description?: string;
    CardStyle?: 'standard' | 'border' | 'shadow';
    Image?: boolean;
    ImageAlt?: string;
    ImageSrc?: string;
    ImageCaption?: string;
    Divider?: boolean;
    Buttons?: boolean;
    Style?: 'solid' | 'outline' | 'ghostHover' | 'link';
    Size?: 'small' | 'medium' | 'large' ;
    ButtonLabel?: string[];
    Color?: keyof typeof colorThemes;
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
const StyledDivider = styled.hr`
  margin: 1em 0 0;
  height: 1.5px;
  border: none;
  background-color: #ccc;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: .8rem;
  border-top: 1.5px solid #ccc;
`;
  
  const Card: React.FC<CardProps> = ({
    Title,
    Subtitle,
    Description,
    CardStyle = 'standard',
    Image = false,
    ImageSrc,
    ImageAlt,
    ImageCaption,
    Divider = false,
    Buttons = false,
    Size = 'medium',
    Style = 'solid',
    Color = 'indigo',
    ButtonLabel = [],
    onClick
  }: CardProps) => {
    const limitedButtonLabels = ButtonLabel.slice(0, 2);

    return (
      <CardContainer 
      CardStyle={CardStyle} 
      Title={Title}
      Subtitle={Subtitle}
      Description={Description}
      ImageAlt={ImageAlt} 
      ImageSrc={ImageSrc}
      ImageCaption={ImageCaption}
      >
        {Image && (
        <ImageContainer>
          <img src={ImageSrc} alt={ImageAlt} />
          <p>{ImageCaption}</p>
        </ImageContainer>
         )}
        {Divider && Image && <StyledDivider />}
       <h2>{Title}</h2>
        <h3>{Subtitle}</h3>
        <p>{Description}</p>
        {Buttons && limitedButtonLabels.length > 0 && (
        <ButtonsContainer>
          {limitedButtonLabels.map((label, index) => (
            <Button
              key={index}
              ButtonLabel={label}
              Color={Color}
              Style={Style}
              Size={Size}
              onClick={() => onClick && onClick(index)}
              />
          ))}
        </ButtonsContainer>
          )}
      </CardContainer>
    );
  };
  
  export default Card;
  