import { Switch, Route } from "react-router-dom";
import './App.css';
import RangeSlider from './components/SliderScreen/RangeSlider';
import MainScreen from './components/MainScreen/MainScreen'



function App() {
  return (
    <Switch >
      <Route exact path="/">
        <div className="App">
          <MainScreen />
        </div>
      </Route>
      <Route path="/color">
        <div className="App">
          <RangeSlider/>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
