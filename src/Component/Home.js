import React, { useState } from "react";
import radioColored from "../Images/radio.png";
import radio from "../Images/empty_btn.png";
import e_check from "../Images/e_sq.png";
import f_check from "../Images/f_sq.png";
import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [procedures, setProcedures] = useState("");
  const [procedures2, setProcedures2] = useState("");
  const [check, setCheck] = useState([]);
  const [cycles, setCycles] = useState(0);

  const handleClick = (val) => {
    setAge(val);
  };

  const handleClick2 = (val) => {
    setProcedures(val);
  };

  const handleClick4 = (val) => {
    setProcedures2(val);
  };

  const handleCheckboxClick = (val) => {
    if (check.includes(val)) {
      setCheck(check.filter((item) => item !== val));
    } else {
      setCheck([...check, val]);
    }
  };

  const handleCalculate = () => {
    navigate("/result");
  };

  const handleSliderChange = (event) => {
    setCycles(event.target.value);
  };

  return (
    <div className="all">
      <div className="range">
        <h1>Which age applies to you? </h1>
        <div className="option1">
          <div onClick={() => handleClick("Under 30")}>
            <img
              src={age === "Under 30" ? radioColored : radio}
              alt="Radio Button"
            />
            Under 30
          </div>

          <div onClick={() => handleClick("Between 30 - 34")}>
            <img
              src={age === "Between 30 - 34" ? radioColored : radio}
              alt="Radio Button"
            />
            Between 30 - 34
          </div>

          <div onClick={() => handleClick("Between 35 - 37")}>
            <img
              src={age === "Between 35 - 37" ? radioColored : radio}
              alt="Radio Button"
            />
            Between 35 - 37
          </div>
        </div>

        <div className="option2">
          <div onClick={() => handleClick("Between 38 - 40")}>
            <img
              src={age === "Between 38 - 40" ? radioColored : radio}
              alt="Radio Button"
            />
            Between 38 - 40
          </div>

          <div onClick={() => handleClick("Between 41 - 43")}>
            <img
              src={age === "Between 41 - 43" ? radioColored : radio}
              alt="Radio Button"
            />
            Between 41 - 43
          </div>

          <div onClick={() => handleClick("Above 43")}>
            <img
              src={age === "Above 43" ? radioColored : radio}
              alt="Radio Button"
            />
            Above 43
          </div>
        </div>
      </div>

      <div className="cycles">
        <div className="number_cycles">
          <h1>Number of IVF Cycles?</h1>
        </div>
        <div className="slider">
          <input
            type="range"
            min={0}
            max={4}
            step={1}
            value={cycles}
            onChange={handleSliderChange}
          />
          <div className="slider-value">{cycles}</div>{" "}
        </div>
      </div>

      <div className="procedures">
        <div className="heading-procedures">
          <h1> Have you undergone these procedures before?</h1>
        </div>
        <div className="procedures-radio">
          <h2>ISCI Procedure:</h2>
          <div onClick={() => handleClick2("Yes")}>
            <img
              src={procedures === "Yes" ? radioColored : radio}
              alt="Radio Button"
            />
            Yes
          </div>

          <div onClick={() => handleClick2("No")}>
            <img
              src={procedures === "No" ? radioColored : radio}
              alt="Radio Button"
            />
            No
          </div>
          <h2>PGT Testing:</h2>

          <div onClick={() => handleClick4("Yes")}>
            <img
              src={procedures2 === "Yes" ? radioColored : radio}
              alt="Radio Button"
            />
            Yes
          </div>
          <div onClick={() => handleClick4("No")}>
            <img
              src={procedures2 === "No" ? radioColored : radio}
              alt="Radio Button"
            />
            No
          </div>
        </div>
      </div>

      <div className="medical">
        <div className="medical-heading">
          <h1>Do you have these medical conditions?</h1>
        </div>
      </div>

      <div className="checkboxes">
        <div onClick={() => handleCheckboxClick("PCOS")}>
          <img
            src={check.includes("PCOS") ? f_check : e_check}
            alt="Check Button"
          />
          PCOS
        </div>

        <div onClick={() => handleCheckboxClick("Endometriosis")}>
          <img
            src={check.includes("Endometriosis") ? f_check : e_check}
            alt="Check Button"
          />
          Endometriosis
        </div>

        <div onClick={() => handleCheckboxClick("Low Ovarian Reserve")}>
          <img
            src={check.includes("Low Ovarian Reserve") ? f_check : e_check}
            alt="Check Button"
          />
          Low Ovarian Reserve
        </div>

        <div onClick={() => handleCheckboxClick("Male Factor Infertility")}>
          <img
            src={check.includes("Male Factor Infertility") ? f_check : e_check}
            alt="Check Button"
          />
          Male Factor Infertility
        </div>
      </div>

      <div className="calc_button">
        <button className="calc" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Home;
