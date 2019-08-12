import React, {Component} from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class SalesGauge extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.RadarChart);
    chart.paddingRight = 20;
    chart.responsive.enabled = true;

    chart.data = [
      {
        "category": "Total Orders",
        "value": 65,
        "full": 100
      },
      {
        "category": "Past Orders",
        "value": 80,
        "full": 100
      },
      {
        "category": "Total Revenue",
        "value": 90,
        "full": 100
      },];

    chart.colors.list = [
      am4core.color("#FF9800"),
      am4core.color("#F44336"),
      am4core.color("#00BCD4"),
    ];


    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(40);

// Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";

// Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;

    categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
      return (target.dataItem.index >= 0) ? "#6C757D" : fill;
    });
    categoryAxis.renderer.minGridDistance = 20;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

// Create series
    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 30;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 30;

    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 30;
    series2.columns.template.disabled = false;
    series2.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

// Add cursor
    chart.cursor = new am4charts.RadarCursor();

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{width: "100%", height: "300px"}}/>
    );
  }
}

export default SalesGauge;