import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import dayjs from 'dayjs';

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [NgxEchartsModule],
  template: `<div echarts [options]="options" class="chart"></div>`,
  styles: [`.chart{width:700px;height:300px;max-width:100%;}`]
})
export class AreaChartComponent {
  @Input() set data(v: { timestamp:number; value:number }[] | null) {
    const list = Array.isArray(v) ? v : [];
    if (list.length === 0) { this.options = {}; return; }

    const fmt = (t:number)=>dayjs(t).format('h:mm:ss a');
    this.options = <EChartsOption>{
      grid:{left:50,right:20,top:20,bottom:40},
      xAxis:{type:'category',data:list.map(p=>p.timestamp),
             axisLabel:{formatter:(v:any)=>fmt(+v)}},
      yAxis:{type:'value'},
      tooltip:{trigger:'axis',
        formatter:(ps:any)=>`<strong>${fmt(ps[0].axisValue)}</strong><br/>Valor: ${ps[0].data}`},
      series:[{
        type:'line',
        data:list.map(p=>p.value),
        areaStyle:{opacity:0.3},
        smooth:true,
        showSymbol:false,
        lineStyle:{color:'#8884d8'},
        itemStyle:{color:'#8884d8'}
      }]
    };
  }
  options:EChartsOption = {};
}
