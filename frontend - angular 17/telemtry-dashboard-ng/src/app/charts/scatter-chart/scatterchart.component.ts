import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector:'app-scatter-chart',
  standalone:true,
  imports:[NgxEchartsModule],
  template:`<div echarts [options]="options" class="chart span-2"></div>`,
  styles:[`.chart{width:700px;height:300px;max-width:100%;}`]
})
export class ScatterChartComponent{
  @Input() set data(v:{cpu:number;latency:number}[]|null){
    const list=Array.isArray(v)?v:[];
    if(list.length===0){this.options={};return;}

    this.options=<EChartsOption>{
      tooltip:{trigger:'item'},
      xAxis:{type:'value',name:'CPU %'},
      yAxis:{type:'value',name:'Latencia (ms)'},
      series:[{
        type:'scatter',
        data:list.map(p=>[p.cpu,p.latency]),
        symbolSize:7,
        itemStyle:{color:'#0088FE'}
      }]
    };
  }
  options:EChartsOption={};
}
