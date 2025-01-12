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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompareAccuracy = () => {
  const [activeTime, setActiveTime] = useState('15MIN');

  const handleTimeClick = (time) => {
    setActiveTime(time);
    // Update chart data based on selected time if needed
  };

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Accuracy',
        data: [80, 50, 30, 70, 60, 50, 70], // Example data
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
          text: 'Accuracy',
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
    <div className="container mt-5 px-3">
      <div className="d-flex justify-content-center mb-3">
        {['10MIN', '15MIN', '30MIN', '45MIN'].map((time) => (
          <button
            key={time}
            className={`btn btn-sm ${activeTime === time ? 'btn-info text-white' : 'btn-secondary'} mx-1`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CompareAccuracy;
