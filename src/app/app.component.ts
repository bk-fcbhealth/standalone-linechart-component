import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import Highcharts = require('highcharts');
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HighchartsChartModule],
})
export class AppComponent {
  Highcharts = Highcharts;
  linechart: any = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Country Name can go here',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: [
        "'90",
        "'92",
        "'94",
        "'96",
        "'98",
        "'00",
        "'02",
        "'04",
        "'06",
        "'08",
        "'10",
        "'12",
        "'14",
        "'16",
        "'18",
        "'19",
      ],
    },
    yAxis: {
      title: {
        text: 'Deaths*',
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'CVD',
        color: '#C42526',
        data: [1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1],
        marker: {
          enabled: false,
        },
      },
      {
        name: 'ISCHEMIC CVD',
        color: '#000000',
        data: [5, 7, 3, 5, 7, 3, 5, 7, 3, 5, 7, 3, 5, 7, 3, 5],
        marker: {
          enabled: false,
        },
      },
      {
        name: 'Cancer',
        color: '#606060',
        data: [20, 7, 3, 5, 7, 3, 50, 7, 3, 5, 7, 3, 51, 7, 32, 5],
        marker: {
          enabled: false,
        },
      },
    ],
  };
}