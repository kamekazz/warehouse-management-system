import React, {Component} from 'react';
import {Chart, Doughnut} from 'react-chartjs-2';
import '../../../app/routes/dashboard/routes/Misc/test.css'

class YearlyProfitChart extends Component {

  render() {

    const {
      shadowColor,
      centerText,
      textColor,
      height,
      backgroundColor,
      borderColor,
      hoverBorderColor,
      hoverBorderWidth,
      rotation,
      chartType
    } = this.props;

    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const _stroke = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 10;
        _stroke.apply(this, arguments);
        ctx.restore();
      };

      Chart.pluginService.register({

        beforeDraw: function (chart) {
          if (chart.options.chartType === chartType) {
            let width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;

            ctx.restore();
            let fontSize = "1.4";
            ctx.font = fontSize + "em sans-serif";
            ctx.fillStyle = textColor;
            ctx.textBaseline = "middle";

            let text = centerText,
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }
      });

      return {
        labels: [
          'red',
          'sky',
        ],
        datasets: [{
          data: [100, 300],
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          hoverBorderColor: hoverBorderColor,
          hoverBorderWidth: hoverBorderWidth
        }],
      }
    }


    const options = {
      maintainAspectRatio: false,
      chartType: chartType,
      legend: {
        display: false,
        labels: {
          fontColor: '#AAAEB3'
        }
      },
      layout: {
        padding: {
          top: 5,
          bottom: 5,
          right: 0,
          left: 0,
        }
      },
      cutoutPercentage: 75,
      borderWidth: 0,
      rotation: (-0.5 * Math.PI) - (25 / rotation * Math.PI)
    };
    return (
      <Doughnut data={data} options={options} height={height}/>
    );
  }
}

export default YearlyProfitChart;