

import { CardHorizontal, Navigation, SearchInput, StatusVariants } from 'cx-portal-shared-components';
import React from 'react';
import { ICard, Card } from '../../generic/card/Card';

function getTechnologies(): ICard[] {
  return [
            {title: 'Example 1', imagePath: '', imageAlt: 'Example image', status: StatusVariants.active, statusText: 'Demostrator ready', label: 'Example 1 - label'},
            {title: 'Example 2', imagePath: '', imageAlt: 'Example image', status: StatusVariants.inactive, statusText: 'In progress'},
            {title: 'Example 3', imagePath: '', imageAlt: 'Example image'},
            {title: 'Example 4', imagePath: '', imageAlt: 'Example image'},
            {title: 'Example 5', imagePath: '', imageAlt: 'Example image'},
  ]
}

function createCards(info: ICard[]): any[] {

  var cards: any[] = []

  info.forEach((value: ICard) => {

      cards.push(
        <Card
          title={value.title}
          imagePath={value.imagePath}
          imageAlt={value.imageAlt}
          status={value.status}
          statusText={value.statusText}
          label={value.label}
        ></Card>
      )
  }) 

  return cards
}

export const IndexApp = () => {

  const style = {padding: '30px 20px'}
  const cardStyle = {marginTop: '20px'}

  let techL: ICard[] = getTechnologies();

  return (
    <div style={style}>

    <Navigation
      active="/home"
      items={[
        {
          href: '/home',
          title: 'home'
        },
        {
          href: '/appstore',
          title: 'App Store'
        },
        {
          href: '/data-catalog',
          title: 'Data Catalog'
        }
      ]}
    />
    <SearchInput />

      {createCards(techL)}
            
    </div>
  )
};