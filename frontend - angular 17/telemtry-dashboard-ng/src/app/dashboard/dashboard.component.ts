// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { SocketService } from '../core/socket.service';
import { scan } from 'rxjs/operators';
import {
  LineChartComponent, 
} from '../charts/line-chart/linechart.component';
import {
  AreaChartComponent,
} from '../charts/area-chart/areachart.component';
import {
  BarChartComponent,
} from '../charts/bar-chart/barchart.component';
import {
  StackedBarComponent,
} from '../charts/stacked-chart/stackedbar.component';
import {
  DonutChartComponent,
} from '../charts/donut-chart/donutchart.component';
import {
  GaugeChartComponent,
} from '../charts/gauge-chart/gaugechart.component';
import {
  ScatterChartComponent,
} from '../charts/scatter-chart/scatterchart.component';
import { LineChartData } from '../intefaces/linechartdata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    LineChartComponent, 
    AreaChartComponent,
    BarChartComponent, StackedBarComponent,
    DonutChartComponent, GaugeChartComponent,
    ScatterChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  telemetry$ = this.socket.listen<LineChartData>('telemetryData').pipe(
    scan<LineChartData, LineChartData[]>((acc, s) => {
      const next = [...acc, s];          // agrega el punto nuevo
      return next.slice(-20);           // conserva los últimos 20
    }, [])
  );
  bar$         = this.socket.listen<any>('barData');
  status$      = this.socket.listen<any>('statusData');
  donut$       = this.socket.listen<any>('deviceDistribution');
  cpu$         = this.socket.listen<number>('cpuPercent');
  scatter$     = this.socket.listen<any>('scatterData');

  constructor(private socket: SocketService) {
    this.telemetry$.subscribe(data => {
      console.log('Datos recibidos para la gráfica:', data);
    });
  }
}
