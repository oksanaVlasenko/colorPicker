import React, {useState} from 'react';
import Button from '../Button/Button';
import InputSlider from '../Slider/InputSlider';
import Square from '../Square/Square';
import './range.css'


const RangeSlider = () =>{
    const initialState = 255;
    const [rangevalred, setRangevalred] = useState(initialState);
    const [rangevalgreen, setRangevalgreen] = useState(initialState);
    const [rangevalblue, setRangevalblue] = useState(initialState);
    const [showSlider, setShowSlider] = useState(true)
    const [allColor, setColor] = useState([])

    const showSliders = () => {
        setShowSlider(!showSlider)
    }

    const submitRGB = (e) => {
        e.preventDefault();
        setColor([...allColor, {rangevalred,rangevalgreen, rangevalblue}])
    }

    const changeRed = (e) => {
        setRangevalred(e.target.value)
    }

    const changeGreen = (e) => {
        setRangevalgreen(e.target.value)
    }

    const changeBlue = (e) => {
        setRangevalblue(e.target.value)
    }
    
    function clearState  ()  {
        let col;
        if (allColor.length === 1 || allColor.length === 0) {
            setShowSlider(false)
        }  else {
            col = allColor[allColor.length-2];
        setRangevalred(col.rangevalred);
        setRangevalgreen(col.rangevalgreen);
        setRangevalblue(col.rangevalblue);
        setShowSlider(false)
        }
      };
    
    return (
      <div className="range-cont App-cont">
        <div className="range-left-cont">
          {showSlider ? <> <InputSlider onChange={changeRed}  value={rangevalred} min={0} max={255} step={1}/>
                <h3>Red: {rangevalred}</h3>

                <InputSlider onChange={changeGreen} value={rangevalgreen} min={0} max={255} step={1}/>
                <h3>Green: {rangevalgreen}</h3>

                <InputSlider onChange={changeBlue} value={rangevalblue} min={0} max={255} step={1}/>
                <h3>Blue: {rangevalblue}</h3></> : null}
           
            <Button onClick={clearState} value={'Cancel'}/>
            <Button onClick={submitRGB} value={'Submit'}/>
            <Button onClick={showSliders} value={'show'}/>
        </div>
        <div className="range-right-cont">
            <h2>Your RGB color is ({rangevalred}, {rangevalgreen}, {rangevalblue}) </h2>
            <Square style={fieldStyle(rangevalred, rangevalgreen, rangevalblue)}/>
        </div>
      </div>
    );
}

export default React.memo(RangeSlider);

const fieldStyle = (red, green, blue) => ({    
    width: '10em',
    height:  '10em',
    backgroundColor: `rgba(${red}, ${green}, ${blue} )`,
    border: '1px solid rgba(23, 40, 53, 0.4)',
    borderRadius: '20px',
    boxShadow: 'inset 1px 1px 1px rgba(23, 40, 53, 0.4), 0px 6px 3px 0px rgba(23, 40, 53, 0.4), 12px 12px 14px -10px rgba(23, 40, 53, 0.4)'
});

