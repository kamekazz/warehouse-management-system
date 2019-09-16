import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import Elevation from '../../../Styles/Elevation';
import { connect } from 'react-redux';
class PalletChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Store', 'Put Away', 'Received'],
        responsive: [
          {
            options: {
              chart: {
                background: '#424242',
                foreColor: '#fafcfc'
              }
            }
          }
        ]
      }
    };
  }
  render() {
    return (
      <ChartDivEl>
        <ChartEl
          options={this.state.options}
          series={this.props.data}
          type="donut"
          width="320"
          height="184"
        />
        <H6El>Pallets</H6El>
        <OccupiedEl>Store</OccupiedEl>
        <EmptyEl>Put Away</EmptyEl>
        <UpcomingEl>Received</UpcomingEl>
      </ChartDivEl>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reivingReducer.palletChart
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PalletChart);

const ChartDivEl = styled.div`
  grid-area: PalletChart;
  position: relative;
  justify-self: center;
  max-height: 184px;
  max-width: 330px;
  border-radius: 5px;
  background-color: #424242;
  padding: 12px;
  align-items: center;
  overflow: hidden;
  ${Elevation[2]};
`;
const ChartEl = styled(ReactApexChart)``;
const H6El = styled.h4`
  color: whitesmoke;
  margin-bottom: 0;
  position: absolute;
  bottom: 4%;
  left: 2%;
`;
const PEl = styled.p`
  color: whitesmoke;
  margin-bottom: 0;
`;

const OccupiedEl = styled(PEl)`
  position: absolute;
  top: 15%;
  right: 9%;
`;
const EmptyEl = styled(PEl)`
  position: absolute;
  top: 26%;
  right: 1%;
`;

const UpcomingEl = styled(PEl)`
  position: absolute;
  top: 36%;
  right: 2%;
`;
