// import React from "react";
// import "./Results.css";
// import familyImage from "../Images/family.png";
// import lineImage from "../Images/line.png";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   datasets: [
//     {
//       data: [64, 36],
//       backgroundColor: ["#52b788", "#2d6a4f"],
//       hoverOffset: 4,
//       borderWidth: 0,
//     },
//   ],
// };

// const options = {
//   cutout: "70%",
//   plugins: {
//     tooltip: { enabled: false },
//   },
// };

// export default function Results() {
//   return (
//     <div
//       className="results-content"
//       style={{
//         backgroundColor: "#1b1b1b",
//         color: "white",
//         textAlign: "center",
//         padding: "20px",
//       }}
//     >
//       <div className="header">
//         <div className="heading-and-line">
//           <div className="both">
//             <div className="line-image">
//               <img src={lineImage} alt="Line" />
//             </div>
//             <h1 className="heading">Your estimated IVF Success Rate is</h1>
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           maxWidth: "300px",
//           margin: "0 auto",
//           marginTop: "20px",
//           position: "relative",
//         }}
//       >
//         <Doughnut data={data} options={options} />
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             fontSize: "24px",
//             fontWeight: "bold",
//             color: "#ffffff",
//           }}
//         >
//           64%
//         </div>
//       </div>

//       <img src={familyImage} alt="Family" className="family-image" />
//     </div>
//   );
// }
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import family from "../Images/family.png";
import "./Results.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = () => {
  const chartData = {
    datasets: [
      {
        data: [64, 36],
        backgroundColor: ["#52b788", "#2d6a4f"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="results-container">
      <nav className="breadcrumb">
        <span>Home</span>
        <span>/</span>
        <span>IVF Success Rate Calculator</span>
        <span>/</span>
        <span className="current">Result</span>
      </nav>

      <div className="content">
        <div className="heading-section">
          <div className="dot-line">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <h2>Your estimated IVF Success Rate is</h2>
        </div>

        <div className="chart-section">
          <div className="chart-wrapper">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="percentage">64%</div>
          </div>
          <p className="cycle-text">With 1 IVF Cycle</p>
        </div>

        <div className="image-section">
          <img src={family} alt="Family" className="family-image" />
          <div className="gradient-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Results;
