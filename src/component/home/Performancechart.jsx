import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Performancechart() {
  const labels = ['03', '06', '09', '12', '15', '18', '21', '24', '27', '30'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Commission',
        data: [20, 35, 60, 40, 55, 45, 60, 50, 55, 80],
        fill: true,
        backgroundColor: 'rgba(0, 59, 143, 0.1)', 
        borderColor: '#003B8F',
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: '#003B8F',
        tension: 0.4,
      },
      {
        label: 'Target Trend',
        data: [30, 40, 35, 60, 50, 65, 70, 60, 68, 75],
        borderColor: '#FBBF24', 
        borderDash: [5, 5], 
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end', 
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 20,
          font: { size: 12, weight: '600' },
          color: '#64748b',
        },
      },
      title: { display: false }, 
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
        titleFont: { size: 14 },
        bodyFont: { size: 13 },
        cornerRadius: 8,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', font: { size: 11 } },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#94a3b8',
          font: { size: 11 },
          callback: (value) => '$' + value + 'k',
          stepSize: 20,
        },
        grid: { color: '#f1f5f9' },
      },
    },
  };

  return (

    <div className="w-full mt-0 px-4 md:px-8">
      <div className="bg-white p-4 md:p-6 rounded-[24px] border border-gray-100 shadow-sm w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Commission Performance</h2>
            <p className="text-xs text-gray-500 font-medium">Real-time data tracking</p>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[350px] w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Performancechart;