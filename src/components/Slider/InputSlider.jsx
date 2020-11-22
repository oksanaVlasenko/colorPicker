import React from 'react';
import './Slider.css'

const InputSlider = ({onChange,  value , min, max, step}) => {
    return (
        <input type="range" className="slider"  value={value} min={min} max={max} step={step} onChange={onChange}/>
    )
    
}

export default InputSlider;