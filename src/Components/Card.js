import React from 'react'

const Card = (props) => {
    let coin = props.coin;
    let id = coin.name;
  return (
    <div className='card'>

        <div className='icon-con'>
            <img src={coin.image} className='card-img'></img>
            <p className='icon-id'>{id}</p>
        </div>

        <div className='rs'>
            <p>RS. {coin.current_price}</p>
        </div>

        <div>
            <p>{coin.price_change_percentage_24h}</p>
        </div>

        <div>
            <p>Mkt Cap:</p>
            <p>{coin.market_cap}</p>
        </div>
        
    </div>
  )
}

export default Card
