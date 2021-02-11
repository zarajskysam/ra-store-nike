import React from 'react'
import ShopCard from '../ShopCard/ShopCard';
import './list-view.css'

const ListView = (props) => {
    const { options } = props;
    return (
        <div className='shop-list'>
            {options.map(option => (
                <ShopCard nameItem={option.name} color={option.color} cardImg={option.img} price={option.price}/>
            ))}
        </div>
    )
}

export default ListView