import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import RangeSlider from './components/SliderScreen/RangeSlider';
import MainScreen from './components/MainScreen/MainScreen'



function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
