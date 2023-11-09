import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");

  //calculation

  let calbmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("plz enter valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      console.log(bmi);
      setbmi(bmi.toFixed(1));
    }

    if (bmi < 25) {
      setmessage("you are underweight");
    } else if (bmi >= 25 && bmi < 30) {
      setmessage("you are healthy");
    } else {
      setmessage("you are overweighjt");
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={calbmi}>
          <div>
            <label>Weight</label>
            <input
              type="text"
              placeholder="enter your weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label>Height</label>
            <input
              type="text"
              placeholder="enter your weight"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>your bmi is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
