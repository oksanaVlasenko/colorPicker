import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../Button/Button';
import './mainscreen.css'

const MainScreen = () => {
    let history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/color",
        });
    }
    return(
        <div className="App-cont">
          <h1 data-text="Color Picker">Color Picker</h1>
          <p className="Main-text"> Finding that perfect color is easier than you think. Use our color picker to discover beautiful colors and harmonies with RGB values. Use the color picker by clicking and dragging your cursor inside the picker area to highlight a color. Click the swatch to add it to your palette. After selecting a color, experiment with different harmonies by using the dropdown below the color picker.</p>
          <Button  value={'try it now'} onClick={handleSubmit}/>
        </div>
    )
}

export default MainScreen;