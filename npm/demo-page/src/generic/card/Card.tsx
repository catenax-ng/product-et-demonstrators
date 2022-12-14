import { CardHorizontal, StatusVariants } from 'cx-portal-shared-components';
import React from 'react';

export interface ICard {
    title:string,
    imagePath: string,
    imageAlt: string,
    status?: StatusVariants,
    statusText?: string,
    reference?: string | undefined,
    label?: string,
}


const borderRadius = 20;
const buttonText = 'More Details'

const cardStyle = {marginTop: '20px'}

export const Card = ({
    title,
    imagePath,
    imageAlt,
    status,
    statusText,
    reference,
    label = 'Catena-X Emerging Technologies'
}: ICard) => {


    return (
  
        <div style={cardStyle}>
          <CardHorizontal
            borderRadius={borderRadius}
            buttonText={buttonText}
            imageAlt={imageAlt}
            imagePath={imagePath}
            label={label}
            onBtnClick={function noRefCheck(){ if (reference) { window.location.href = reference } }}
    
            status={status}
            statusText={statusText}
            title={title}
          />
        </div>)

}