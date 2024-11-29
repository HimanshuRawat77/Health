// import React from "react";
// import "./Results.css";

// import parents from "../Images/family.png";
// import line from "../Images/line.png";

// const Results = () => {
//   return (
//     <div className="result-container">
//       <div>
//         <img className="parents-image" src={parents} alt="Family" />

//         <img className="linear-image" src={line} alt="Line" />
//       </div>
//     </div>
//   );
// };

// export default Results;
import React from "react";
import "./Results.css";
import familyImage from "../Images/family.png";
import lineImage from "../Images/line.png";

export default function Results() {
  return (
    <div className="results-content">
      <div className="header">
        <div className="heading-and-line">
          <h1 className="heading">Your estimated IVF Success Rate is</h1>
          <div className="line-image">
            <img src={lineImage} alt="Line" />
          </div>
        </div>
      </div>

      <img src={familyImage} alt="Family" className="family-image" />
    </div>
  );
}
