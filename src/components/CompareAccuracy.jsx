import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompareAccuracy = () => {
  const [activeTime, setActiveTime] = useState('15MIN');

  const handleTimeClick = (time) => {
    setActiveTime(time);
  };

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Accuracy',
        data: [80, 50, 30, 70, 60, 50, 70], 
        backgroundColor: '#a29bfe',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Slots',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Accuracy (%)',
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  return (
    <div className="container mt-5 px-3 position-relative ">
      <div className="d-flex justify-content-center mb-3">
        {['10MIN', '15MIN', '30MIN', '45MIN'].map((time) => (
          <button
            key={time}
            className={`btn btn-sm ${activeTime === time ? 'btn-info text-white' : 'btn-secondary'} mx-1`}
            onClick={() => handleTimeClick(time)}
            style={{zIndex:"100"}}
          >
            {time}
          </button>
        ))}

       {/* info Bar */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "15%",
            height: "8px",
            width: "80%",
            backgroundColor: "#ABEDE9",
            borderRadius: "2px",
          }}
        ></div> 

      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CompareAccuracy;
