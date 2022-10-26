

import { CardHorizontal, Navigation, PageHeader, SearchInput, StatusVariants, Typography } from 'cx-portal-shared-components';
import React, { useState, useEffect } from 'react';
import { ICard, Card } from '../../generic/card/Card';

function getTechnologies(): ICard[] {
  return [
            {title: 'Example 1', imagePath: '', imageAlt: 'Example image', status: StatusVariants.active, statusText: 'Demostrator ready', label: 'Example 1 - label', reference: '/demos/a'},
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
          reference={value.reference}
          label={value.label}
        ></Card>
      )
  }) 

  return cards
}


class IndexApp extends React.Component{

  style: {};
  style_list: {};
  style_para: {};

  techL: ICard[] = []
  techL_copy: ICard[] = []

  cards: any[] = []
  

  constructor(props: any) {

    super(props);

    this.style = {padding: '30px 20px'}
    this.style_list = {listStyle: "none", padding: 0}
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

        <Typography variant="h4">Emerging Technologies demonstrator space</Typography>
        <p style={this.style_para}>
          Hello World! Website and project description
          <br />
          (Executive Summary)
        </p>

        <ul style={this.style_list}>
  
          {this.cards.map((item, i) =>
            <li key={i}>{item}</li>
          )}

        </ul>

      </div>
    )
  }
}

export default IndexApp;