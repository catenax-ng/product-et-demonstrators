import { Typography } from 'cx-portal-shared-components';
import React from 'react';


export interface IDemoList {
  cards: any[],
}

const style_list = {listStyle: "none", padding: 0}

export const DemoList = ({
  cards
}: IDemoList) => {

    return (
  
      <ul style={style_list} className='demo-list'>
  
        {cards.map((item, i) =>
          <li key={i}>{item}</li>
        )}

      </ul>
    )

}