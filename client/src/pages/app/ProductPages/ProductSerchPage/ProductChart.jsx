import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import { PaperEl } from '../../../../Styles/Elements/ToolsEl';

class ProductChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: false
          },
          background: '#424242',
          foreColor: '#fafcfc'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'New Product  by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep'
          ]
        }
      },
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ]
    };
  }

  render() {
    return (
      <DivEl elevation={10}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="350"
        />
      </DivEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductChart);

const DivEl = styled(PaperEl)`
  grid-area: ProductChart;
  max-width: 561px;
  max-height: 381px;
`;
