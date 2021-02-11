import React from 'react';
import './icon-switch.css';

const IconSwitch = (props) => {
    const { icon, onSwitch } = props;
    const switchButton = () => {
        onSwitch();
    }
    return (
        <button className='switch-button' onClick={switchButton}>{icon}</button>
    )
}

export default IconSwitch