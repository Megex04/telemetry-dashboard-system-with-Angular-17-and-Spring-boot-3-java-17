// src/app/charts/bar-chart/bar-chart.component.ts
import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import dayjs from 'dayjs';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxEchartsModule],
  template: `<div echarts [options]="options" class="chart"></div>`,
  styles: [`.chart{width:700px;height:280px;max-width:100%;}`]
})
export class BarChartComponent {

  /** Ahora acepta [{ timestamp, value }] */
  @Input() set data(v: { timestamp: number; value: number }[] | null) {
    const list = Array.isArray(v) ? v : [];

    if (list.length === 0) {      // placeholder mientras no haya datos
      this.options = {};
      return;
    }

    const fmt = (t:number) => dayjs(t).format('h:mm:ss a');

    this.options = <EChartsOption>{
      xAxis: {
        type: 'category',
        data: list.map(p => fmt(p.timestamp)),
        axisLabel: { rotate: 45 }
      },
      yAxis: { type: 'value' },
      tooltip: { trigger: 'axis' },
      series: [{
        type: 'bar',
        data: list.map(p => p.value),
        itemStyle: { color: '#82ca9d' }
      }]
    };
  }

  options: EChartsOption = {};
}
