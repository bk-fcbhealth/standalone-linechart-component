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
      plotBands: [{
        color: '#E9E9E9',
        from: 14,
        to: 15
      }],

    },
    yAxis: {
      title: {
        text: 'Deaths*',
      },
      gridLineWidth: 0,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'CVD',
        color: '#C42526',
        data: [346, 337, 340, 336, 330, 327, 317, 297, 285, 274, 265, 266, 269, 276, 284, 291],
        marker: {
          enabled: false,
        },
      },
      {
        name: 'ISCHEMIC CVD',
        color: '#000000',
        data: [238, 228, 226, 220, 214, 210, 201, 185, 176, 166, 158, 157, 157, 159, 165, 170],
        marker: {
          enabled: false,
        },
      },
      {
        name: 'Cancer',
        color: '#606060',
        data: [212, 212, 216, 216, 214, 214, 213, 208, 208, 209, 209, 212, 216, 221, 229, 235],
        marker: {
          enabled: false,
        },
      },
      {
        name: 'CVD2',
        color: '#C42526',
        dashStyle: 'ShortDash',
        data: [505, 489, 467, 450, 428, 402, 383, 350, 321, 300, 281, 276, 269, 266, 275, 279],
        marker: {
          enabled: false,
        },
      },
      {
        name: 'ISCHEMIC CVD2',
        color: '#000000',
        dashStyle: 'ShortDash',
        data: [318, 305, 287, 271, 253, 231, 213, 190, 171, 156, 143, 138, 133, 131, 136, 138],
        marker: {
          enabled: false,
        },
      },
      {
        name: 'Cancer2',
        color: '#606060',
        dashStyle: 'ShortDash',
        data: [295, 293, 290, 287, 283, 278, 276, 273, 270, 271, 268, 272, 275, 280, 288, 291],
        marker: {
          enabled: false,
        },
      },
    ],
    
  };
}
