import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  Chart,
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
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  @ViewChild('lineCanvas', { static: true }) lineCanvas;

  csstest = 'danger';

  transactions = [
    {
      type: 'buy',
      title: 'Mobile Recharge',
      id: '001',
      date: '08-06-2022',
      amount: -22
    },
    {
      type: 'buy',
      title: 'Stocks Investment',
      id: '002',
      date: '09-06-2022',
      amount: -22
    },
    {
      type: 'sell',
      title: 'Stocks Sales',
      id: '003',
      date: '10-06-2022',
      amount: 335
    }
  ];

  private lineChart: Chart;

  constructor(private router: Router) {}

  dashboardPage() {
    this.router.navigate(['dashboard']);
  }

  notificationsPage() {
    this.router.navigate(['notifications']);
  }

  profilePage() {
    this.router.navigate(['profile']);
  }

  ngOnInit() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: [' ', '1week', '2week', '3week', '4week', '5week', ' '],
        datasets: [
          {
            borderWidth: 2,
            borderColor: '#28A745',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [65, 50, 80, 90, 56, 85, 50],
            fill: false,
          },
          {
            borderColor: 'rgba(255,255,255,0.5)',
            borderWidth: 1,
            borderDash: [3, 5],
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [40, 60, 70, 64, 89, 50, 69],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            grid: {
              drawBorder: false,
              display: false,
            },
          },
          y: {
            display: false,
          },
        },
      },
    });
  }

}
