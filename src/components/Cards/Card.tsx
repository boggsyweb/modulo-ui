import React from 'react';
import styled from '@emotion/styled';
import colorThemes from '../colorThemes';
import { Icons } from '../Icons';
import Button from '../Buttons/Button';

type CardProps = {
    title?: boolean;
    CardTitle: string;
    subtitle?: boolean;
    CardSubtitle: string;
    description?: boolean;
    CardDescription: string;
    style?: 'standard' | 'border' | 'shadow';
    CardSize?: 'small' | 'medium' | 'large' | 'xl' | 'full';
    horizontal?: boolean;
    image?: boolean;
    imageAlt: string;
    caption?: boolean;
    imageCaption: string;
    divider?: boolean;
    buttons?: boolean;
    buttonStyles?: ('solid' | 'link' )[];
    buttonLabels?: string[];
    themeName?: keyof typeof colorThemes;
    onClick?: () => void;
  };