import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import { styleColor } from '../../../Styles/styleThem';
import Elevation from '../../../Styles/Elevation';

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

class HeatmapChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          background: '#424242',
          foreColor: '#fafcfc'
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            colorScale: {
              ranges: [
                {
                  from: -30,
                  to: 5,
                  name: 'low',
                  color: styleColor.color.greyDark2
                },
                {
                  from: 6,
                  to: 20,
                  name: 'medium',
                  color: styleColor.secondary.main
                },
                {
                  from: 21,
                  to: 45,
                  name: 'high',
                  color: styleColor.primary.main
                },
                {
                  from: 46,
                  to: 55,
                  name: 'extreme',
                  color: styleColor.error.main
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: !this.props.title ? 'Pallet life activity' : this.props.title
        }
      },
      series: [
        {
          name: 'Jan',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Feb',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Mar',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Apr',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'May',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Jun',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Jul',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Aug',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Sep',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        }
      ]
    };
  }

  render() {
    return (
      <ChartDivEl>
        <ChartEl
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          height="350"
          width="100%"
        />
      </ChartDivEl>
    );
  }
}

export default HeatmapChart;

const ChartDivEl = styled.div`
  grid-area: Charts;
  justify-self: center;
  width: 100%;
  border-radius: 5px;
  background-color: #424242;
  padding: 5px;
  align-items: center;
  ${Elevation[2]}
`;

const ChartEl = styled(ReactApexChart)``;
