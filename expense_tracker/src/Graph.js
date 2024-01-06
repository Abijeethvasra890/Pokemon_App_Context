import React from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 

//this function is used to calculate the monthly total and render it as graph
const Graph = ({filteredExpenses, setTotal}) => {
    const expensesByMonth = {};//this is used to store the monthly wise expenses as obj
    let total = 0;
    //this function is used to calculate the monthly total
    filteredExpenses.forEach((expense) => {
        const month = new Date(expense.date).getMonth() + 1; // Months are zero-based
        expensesByMonth[month] = (expensesByMonth[month] || 0) + expense.price;
        total += parseInt(expense.price);
    });
    setTotal(total);//this is used to set the Yearly total to State 
    //this func is used to set the Chart data
    const chartData = {
        labels: Array.from({ length: 12 }, (_, index) => index + 1), 
        datasets: [
            {
            label: 'Monthly Expenses',
            data: Array.from({ length: 12 }, (_, index) => expensesByMonth[index + 1] || 0),
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        maintainAspectRatio: false, // Set this to false to allow customization of width and height
      };
  return (
    <div><Bar data={chartData} options={chartOptions} width={400} height={200} /></div>
  )
}

export default Graph