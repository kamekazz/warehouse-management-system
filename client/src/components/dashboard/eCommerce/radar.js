import React, {Component} from 'react';
import {Chart, Radar} from 'react-chartjs-2';


const data = (canvas) => {
  let gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
  gradientBlue.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
  gradientBlue.addColorStop(1, 'rgba(151, 135, 255, 0.8)');

  let gradientHoverBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
  gradientHoverBlue.addColorStop(0, 'rgba(65, 65, 255, 1)');
  gradientHoverBlue.addColorStop(1, 'rgba(131, 125, 255, 1)');

  let gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
  gradientRed.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
  gradientRed.addColorStop(1, 'rgba(255, 135, 135, 0.8)');

  let gradientHoverRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
  gradientHoverRed.addColorStop(0, 'rgba(255, 65, 164, 1)');
  gradientHoverRed.addColorStop(1, 'rgba(255, 115, 115, 1)');

  Chart.plugins.register({
    afterEvent: function (chart, e) {
      const datasets = chart.config.data.datasets;

      if (chart.options.chartType === 'customRadar') {
        chart.ctx.beginPath();
        chart.ctx.moveTo(91, 69);
        chart.ctx.lineTo(152, 80);
        chart.ctx.lineTo(192, 75);
        chart.ctx.lineTo(213, 138);
        chart.ctx.lineTo(148, 168);
        chart.ctx.lineTo(105, 126);
        chart.ctx.fill();
        chart.ctx.closePath();

        if (chart.ctx.isPointInPath(e.x, e.y)) {
          let dataset = datasets[0];
          dataset.backgroundColor = gradientHoverBlue;
          chart.update();
          canvas.style.cursor = 'pointer';
        } else {
          let dataset = datasets[0];
          dataset.backgroundColor = gradientBlue;
          chart.update();
          canvas.style.cursor = 'default';
        }

        // Blue chart
        chart.ctx.beginPath();
        chart.ctx.moveTo(85, 61);
        chart.ctx.lineTo(149, 66);
        chart.ctx.lineTo(224, 63);
        chart.ctx.lineTo(179, 112);
        chart.ctx.lineTo(152, 177);
        chart.ctx.lineTo(121, 117);
        chart.ctx.fill();
        chart.ctx.closePath();

        if (chart.ctx.isPointInPath(e.x, e.y)) {
          let dataset = datasets[1];
          dataset.backgroundColor = gradientHoverRed;
          chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.10)';
          chart.ctx.shadowBlur = 10;
          chart.update();
          canvas.style.cursor = 'pointer';
        } else {
          let dataset = datasets[1];
          dataset.backgroundColor = gradientRed;
          chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
          chart.ctx.shadowBlur = 0;
          chart.update();
          canvas.style.cursor = 'default';
        }
      }
    }
  });


  return {
    labels: ["", "", "", "", "", ""],
    datasets: [{
      label: "Donté Panlin",
      data: [70, 85, 65, 65, 85, 82],
      fill: true,
      backgroundColor: gradientBlue,
      borderColor: 'transparent',
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointHoverBackgroundColor: "transparent",
      pointHoverBorderColor: "transparent",
      pointHitRadius: 50,
    }, {
      label: "Mireska Sunbreeze",
      data: [80, 70, 80, 80, 75, 40],
      fill: true,
      backgroundColor: gradientRed,
      borderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointHoverBackgroundColor: "transparent",
      pointHoverBorderColor: "transparent",
      pointHitRadius: 50,
    }]
  }
};

let shadowed = {
  beforeDatasetsDraw: function (chart, options) {
    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.50)';
    chart.ctx.shadowBlur = 10;
  },
  afterDatasetsDraw: function (chart, options) {
    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    chart.ctx.shadowBlur = 0;
  }
};

const options = {
  chartType: 'customRadar',
  legend: {
    display: false,
    labels: {
      fontColor: '#AAAEB3'
    }
  },
  plugins: [shadowed]
};


class RadarChart extends Component {

  render() {
    return (
      <Radar data={data} options={options} height={250}/>
    );
  }
}

export default RadarChart;