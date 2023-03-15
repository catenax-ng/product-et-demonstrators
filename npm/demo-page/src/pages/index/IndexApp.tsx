

import { CardHorizontal, Navigation, PageHeader, SearchInput, StatusVariants, Typography } from 'cx-portal-shared-components';
import React, { useState, useEffect } from 'react';
import { ICard, Card } from '../../generic/card/Card';
import { IDemoList, DemoList } from './DemoList';
import IntroContent from './IntroContent';
import Introduction from './Introduction';

function getTechnologies(): ICard[] {
  return [
            {title: 'Differential Privacy', imagePath: '../md-content/images/demo_cover/differential-privacy.png', imageAlt: 'Example diagram Differential Privacy', reference: '/demos/differential-privacy'},
            {title: 'Multi-Party Computation', imagePath: '../md-content/images/demo_cover/multi-party-computation.png', imageAlt: 'Example image', reference: '/demos/multi-party-computation'},
            {title: 'Federated Learning', imagePath: '../md-content/images/demo_cover/federated-learning.png', imageAlt: 'Example image', reference: '/demos/federated-learning'},
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
          label=""

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

      <div className='container'>

        <Typography variant="h2">Emerging Technologies Space</Typography>

        <Introduction />

        <DemoList cards={this.cards}/>

        <IntroContent />

      </div>
    )
  }
}

/*
        <div style={{display: "table"}}>
          <div style={{display: "table-row"}}>
            <div style={{display: "table-cell", verticalAlign: "top"}}><IntroContent /></div>
            <div style={{width: "35px", display: "table-cell", verticalAlign: "top"}}></div>
            <div style={{width: "500px", display: "table-cell", verticalAlign: "top"}}><DemoList cards={this.cards}/></div>
          </div>
        </div>
*/

export default IndexApp;