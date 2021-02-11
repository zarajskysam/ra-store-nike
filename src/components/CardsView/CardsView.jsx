import { Shop } from '@material-ui/icons';
import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import './cards-view.css';

const CardsView = (props) => {
    const { options } = props;

    return (
        <div className='shop-card'>
            {options.map(option => (
                <ShopCard nameItem={option.name} color={option.color} cardImg={option.img} price={option.price}/>
            ))}
        </div>
    )
}

export default CardsView