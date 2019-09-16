import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import Elevation from '../../../Styles/Elevation';

class LocationChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Occupied', 'Empty', 'Upcoming', 'Maintenance'],
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
      },
      series: [44, 55, 41, 17]
    };
  }

  render() {
    return (
      <ChartDivEl>
        <ChartEl
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="320"
          height="184"
        />
        <H6El>Locations</H6El>
        <OccupiedEl>Occupied</OccupiedEl>
        <EmptyEl>Empty</EmptyEl>
        <UpcomingEl>Upcoming</UpcomingEl>
        <MaintenanceEl>Maintena..</MaintenanceEl>
      </ChartDivEl>
    );
  }
}
export default LocationChart;

const ChartDivEl = styled.div`
  grid-area: LocationChart;
  position: relative;
  justify-self: center;
  max-height: 184px;
  max-width: 330px;
  border-radius: 5px;
  background-color: #424242;
  padding: 12px;
  align-items: center;
  ${Elevation[2]}
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
  top: 16%;
  right: 4%;
`;
const EmptyEl = styled(PEl)`
  position: absolute;
  top: 27%;
  right: 11%;
`;

const UpcomingEl = styled(PEl)`
  position: absolute;
  top: 38%;
  right: 3%;
`;

const MaintenanceEl = styled(PEl)`
  position: absolute;
  top: 50%;
  right: 1.5%;
`;
