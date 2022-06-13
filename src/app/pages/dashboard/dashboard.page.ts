import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import { AuthService } from 'src/app/services/auth.service';

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
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('barCanvas', { static: true }) barCanvas;


  public menustatus: any;
  private barChart: Chart;


  constructor(private router: Router, private authSrv: AuthService) {}


  menuopen() {
    alert('function changecolor');
    this.menustatus = 'open';
  }

  notificationsPage() {
    this.router.navigate(['notifications']);
  }

  profilePage() {
    this.router.navigate(['profile']);
  }

  logOut() {
    this.authSrv.logout();
  }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
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
