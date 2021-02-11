import React from 'react';
import IconSwitch from './IconSwitch/IconSwitch';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { useState } from 'react';
import './store.css';
import { products } from '../../data/cardsData';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';


const Store = () => {
    const [ switchIcon, setSwitchIcon ] = useState(false);
    const icon = switchIcon ? <ViewListIcon/> : <ViewModuleIcon/>;
    const listOrCard = switchIcon ? <ListView options={products}/> : <CardsView options={products}/>;
    const switchAction = () => {
        setSwitchIcon(!switchIcon);
        console.log(!switchIcon);
    }

    const changeStyle = () => {
        switchAction();
        console.log(222); 
    }

    return (
        <div className="container">
            <IconSwitch icon={icon} onSwitch={changeStyle}/>
            {listOrCard}
        </div>
    )
}

export default Store