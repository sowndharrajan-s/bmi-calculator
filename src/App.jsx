import { useState } from 'react'

import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmistatus] = useState("");

  const calculate = () => {
    if (height && weight) {
      const heightMeters = height /100;
      const bmiValue =  weight /(heightMeters * heightMeters);
      setBmi(bmiValue.toFixed(2))
      if(bmiValue < 18.5) {
        setBmistatus("underweight")

      }else if (bmiValue >= 18.5 && bmiValue < 24.9){
        setBmistatus("normal weight")
      }else if (bmiValue >= 25 && bmiValue < 29.9){
        setBmistatus("overweight")
      }else{
        setBmistatus("obese")
      }
    } else {
      setBmi(null);
      setBmistatus("")
    }
  }
  return (
    <>
      <div className="bmi-calculator">
        <div className="box">
          <div className="data">
            <h1>BMI CALCULATOR</h1>
            <div className="input-container">
              <label htmlFor='height'>height (cm):</label>
              <input type="text" id="height" value={height} onChange={(e) => {
                setHeight(e.target.value)
              }} />
            </div>
            <div className="input-container">
              <label htmlFor='weight'>weight (kg):</label>
              <input type="text" id="weight" value={weight} onChange={(e) => {
                setWeight(e.target.value)
              }} />
            </div>
            <button onClick={calculate}>Calculate BMI</button>
            {bmi !== null && (
              <div className="result">
              <p>Your BMI is :{bmi}</p>
              <p>status: {bmiStatus}</p>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
