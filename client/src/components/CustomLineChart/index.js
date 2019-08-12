import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class CustomLineChart extends Component {
  render() {
    const {
      labels,
      label,
      borderColor,
      chartData,
      pointBackgroundColor,
      height,
      pointBorderColor,
      borderWidth,
      shadowColor,
      pointBorderWidth,
      lineTension,
      pointRadius,
      pointHoverBorderColor,
      gridLinesDisplay,
      gridLineWidth
    } = this.props;

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
            lineTension: lineTension,
            fillOpacity: 0.3,
            borderColor: borderColor,
            borderWidth: borderWidth,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            pointBorderWidth: pointBorderWidth,
            pointRadius: pointRadius,
            pointHoverBackgroundColor: pointBackgroundColor,
            pointHoverBorderColor: pointHoverBorderColor,
            pointHoverBorderWidth: 4,
            pointHoverRadius: 6,
            data: chartData,
          }
        ]
      }
    }
    // chart options
    const options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            display: false,
            min: 0
          },
          gridLines: {
            display: gridLinesDisplay,
            drawBorder: false,
            lineWidth: gridLineWidth
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true
          }
        }],

      },
      layout: {
        padding: {
          left: -30,
          right: 0,
          top: 10,
          bottom: -10,
        },
      }
    };
    return (
      <Line data={data} options={options} height={height}/>
    );
  }
}

export default CustomLineChart;
