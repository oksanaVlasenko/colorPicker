import React from 'react';
import './button.css'

const Button = ({value, onClick}) => {
    return (
        <input value={value} className="btn" onClick={onClick} type="button"></input>
    )
}

export default Button;