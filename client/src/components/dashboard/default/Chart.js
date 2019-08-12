import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class Chart extends Component {
  render() {
    const {labels, label, borderColor, chartdata, pointBackgroundColor, height, pointBorderColor, shadowColor} = this.props;
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const _stroke = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 13;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 12;
        _stroke.apply(this, arguments);
        ctx.restore();
      };
      return {
        labels: labels,
        datasets: [
          {
            label: label,
            fill: false,
            tension: 0.40,
            fillOpacity: 0.3,
            borderColor: borderColor,
            borderWidth: '4',
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            pointBorderWidth: '3',
            pointHoverBackgroundColor: pointBackgroundColor,
            pointHoverBorderColor: '#4CB050',
            pointHoverBorderWidth: '6',
            pointHoverRadius: '8',
            pointRadius: 3,
            pointHitRadius: 8,
            data: chartdata,
          }
        ]
      }
    }

    const options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            min: 0,
            display: false,
          },
          gridLines: {
            display: true,
            drawBorder: false,
            lineWidth: 10,
          }
        }],

        yAxes: [{
          display: false,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true
          }
        }]
      },
    };
    return (
      <Line data={data} options={options} height={height}/>
    );
  }
}
