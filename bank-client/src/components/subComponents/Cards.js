import React from 'react'
import Card1 from '../../assets/cards/card1.webp'
import Card2 from '../../assets/cards/card2.png'
import Card3 from '../../assets/cards/card3.png'
import Card4 from '../../assets/cards/card4.png'

const Cards = () => {
    var items = [
        {
          bgImg: Card1,
          description: "Banner1",
        },
        {
          bgImg: Card2,
          description: "Banner2",
        },
        {
          bgImg: Card3,
          description: "Banner3",
        },
        {
          bgImg: Card4,
          description: "Banner3",
        },
      ];
  return (
    <div class="flex justify-around">
        {items.map((item,i)=>(
            <div class="w-72 h-72 bg-cover bg-center" style={{ backgroundImage: `url(${item.bgImg})` }}>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Cards