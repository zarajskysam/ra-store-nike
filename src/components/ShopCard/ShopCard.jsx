import React from 'react'

const ShopCard = (props) => {
    const { nameItem, color, cardImg, price, cardStyle } = props;
    return (
        <div className='price-card'>
            <h2>{nameItem}</h2>
            <p>{color}</p>
            <img src={cardImg} alt={nameItem}/>
            <div className='price'>
                <div className="price-info">${price}</div>
                <button className="price-button">Add to cart</button>
            </div>
        </div>
    )
}

export default ShopCard
