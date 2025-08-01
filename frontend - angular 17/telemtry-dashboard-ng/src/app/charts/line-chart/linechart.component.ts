// src/app/charts/line-chart/linechart.component.ts
import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import dayjs from 'dayjs';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxEchartsModule],
  template: `<div echarts [options]="options" class="chart"></div>`,
  styles: [`
    .chart{
      width:700px;
      height:300px;
      max-width:100%;
    }
  `]
})
export class LineChartComponent {
  @Input() 
  set data(v: { timestamp:number; value:number }[] | null | undefined) {
    // 👉 siempre trabajamos con un array (vacío si viene null/undefined)
    const list = Array.isArray(v) ? v : [];

    // Si aún no hay datos, deja la opción vacía (no pintará nada)
    if (list.length === 0) {
      this.options = {};
      return;
    }

    const fmt = (t:number) => dayjs(t).format('h:mm:ss a');

    this.options = <EChartsOption>{
      grid: { left: 50, right: 20, top: 20, bottom: 40 },
      xAxis: {
        type: 'category',
        data: list.map(d => d.timestamp),
        axisLabel: {
          formatter: (value:number) => fmt(value),
          fontWeight: 'bold'
        }
      },
      yAxis: { type: 'value' },
      tooltip: {
        trigger: 'axis',
        formatter: (params:any) => {
          const p = params[0];
          return `<strong>${fmt(p.axisValue)}</strong><br/>Valor: ${p.data}`;
        }
      },
      series: [{
        type: 'line',
        data: list.map(d => d.value),
        smooth: true,
        showSymbol: false,
        lineStyle: { color: '#00f538' }
      }]
    };
  }

  options: EChartsOption = {};
}
