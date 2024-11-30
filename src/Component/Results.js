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
        <span>
          <a href="/">Home</a>
        </span>
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
