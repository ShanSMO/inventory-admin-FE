import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    const myChart: any = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'a', 'b', 'c', 'd'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 15, 5, 2, 3, 45, 3, 5, 2],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });



    const canvass: any = document.getElementById('myChart2');
    const ctxx = canvass.getContext('2d');
    const myChart2: any = new Chart(ctxx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'a', 'b', 'c', 'd'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 15, 5, 2, 3, 45, 3, 5, 2],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

}
