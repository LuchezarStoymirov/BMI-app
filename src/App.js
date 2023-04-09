import { useState } from "react";
import './App.css'

function App(){

  var [bodyInfo, setBodyInfo] = useState({
    weight: null,
    height: null
  })

  var [mouseOver, setMouseOver] = useState(false);

  var MousedOver = (event) => {
    setMouseOver(true);
  }

  var MouseLeave = (event) => {
    setMouseOver(false);
  }

  var [BMI, setBMI] = useState(null);


  var HandleChange = (event) => {
    var {name, value} = event.target;

    setBodyInfo(prevValue => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  var CalculateBMI = () => {
    var result = bodyInfo.weight / Math.pow(bodyInfo.height, 2);

    setBMI(Math.round(result));
  }


  return(
    <div>
      <div className="Inputs">
        <div className="weight"><h1>Weight: {bodyInfo.weight}</h1></div>
        <div className="height"><h1>Height: {bodyInfo.height}</h1></div>
        <div className="bmi"><h1>BMI: {BMI}</h1></div>
        <div className="weightinput"><input name="weight" type="number" placeholder="Weight in kilograms" onChange={HandleChange} value={bodyInfo.weight}/></div>
        <div className="heightinput"><input name="height" type="number" placeholder="Height in meters" onChange={HandleChange} value={bodyInfo.height}/></div>
        <div className="calcbutton"><button 
        onClick={CalculateBMI}
        onMouseEnter={MousedOver}
        onMouseOut={MouseLeave}
        style={{backgroundColor: mouseOver? 'black': null, color: mouseOver? 'white': null}}
        >Calculate BMI</button></div>
        <h1 className="Itteration">
          {BMI === 0? '': null}
          {BMI <= 18 && BMI >= 1? 'You are underweight.' : null}
          {BMI >= 19 && BMI <= 24? 'You are normal weight.': null}
          {BMI >= 25? 'You are overweight.' : null}
        </h1>
      </div>
    </div>
  );
}

export default App;