

import { CardHorizontal, Navigation, PageHeader, SearchInput, StatusVariants, Typography } from 'cx-portal-shared-components';
import React, { useState, useEffect } from 'react';
import { ICard, Card } from '../../generic/card/Card';
import { IDemoList, DemoList } from './DemoList';
import IntroContent from './IntroContent';
import Introduction from './Introduction';

function getTechnologies(): ICard[] {
  return [
            {title: 'Differential Privacy', imagePath: '', imageAlt: 'Example image', status: StatusVariants.inactive, statusText: 'In progress', label: 'Example 1 - label', reference: '/demos/differential-privacy'},
            {title: 'Multi-Party Computation', imagePath: '', imageAlt: 'Example image', status: StatusVariants.inactive, statusText: 'In progress', reference: '/demos/multi-party-computation'},
            {title: 'Federated Learning', imagePath: '', imageAlt: 'Example image', status: StatusVariants.inactive, statusText: 'In progress', reference: '/demos/federated-learning'},
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
          reference={value.reference}
          label={value.label}
        ></Card>
      )
  }) 

  return cards
}


class IndexApp extends React.Component{

  style: {};
  style_para: {};

  techL: ICard[] = []
  techL_copy: ICard[] = []

  cards: any[] = []
  

  constructor(props: any) {

    super(props);

    this.style = {padding: '60px 50px'}
    this.style_para = {textAlign: 'center', padding: '30px 20px'}

    this.techL = getTechnologies();
    this.techL_copy = this.techL.map((x) => x)

    this.cards = createCards(this.techL_copy)
  }

  searchAcction(search: string) {

    this.techL.filter((x) => console.log(x))
  
    this.techL_copy = this.techL.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))

    this.cards = createCards(this.techL_copy)
    this.render()
  }

  render() {

    // <SearchInput onChange={e => this.searchAcction(e.target.value)} />

    return (

      <div style={this.style}>

        <Typography variant="h2">Emerging Technologies Space</Typography>

        <Introduction />

        <div style={{display: "table"}}>
          <div style={{display: "table-row"}}>
            <div style={{display: "table-cell", verticalAlign: "top"}}><IntroContent /></div>
            <div style={{width: "35px", display: "table-cell", verticalAlign: "top"}}></div>
            <div style={{width: "500px", display: "table-cell", verticalAlign: "top"}}><DemoList cards={this.cards}/></div>
          </div>
        </div>

        

      </div>
    )
  }
}

export default IndexApp;