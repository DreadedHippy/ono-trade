import { Component, OnInit } from '@angular/core';
import {
  Chart,
  ChartType,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);

@Component({
  selector: 'app-charttest',
  templateUrl: './charttest.page.html',
  styleUrls: ['./charttest.page.scss'],
})
export class CharttestPage implements OnInit {
  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  data = {
    labels: this.labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgb(72, 245, 66)',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      borderColor: 'rgb(72, 245, 66)',
      data: [15, 10, 3, 28, 18, 50],
      fill: false
    }]
  };
  config = {
    type: 'bar' as ChartType,
    data: this.data,
    options: {
      responsive: true,
      title: {
        display: true,
         position: 'top',
         text: 'Line Chart',
         fontSize: 12,
         fontColor: '#222'
       },
       legend: {
        display: true,
         position: 'bottom',
         labels: {
          fontColor: '#444',
           fontSize: 14
         }
       }
    }
  };

  constructor() { }


  ngOnInit() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(
    canvas,
    this.config
    );
  }

}
