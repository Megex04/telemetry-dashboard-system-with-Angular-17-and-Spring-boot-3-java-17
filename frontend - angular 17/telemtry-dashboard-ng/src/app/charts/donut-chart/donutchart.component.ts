import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector:'app-donut-chart',
  standalone:true,
  imports:[NgxEchartsModule],
  template:`<div echarts [options]="options" class="chart"></div>`,
  styles:[`.chart{width:500px;height:260px;max-width:100%;}`]
})
export class DonutChartComponent{
  @Input() set data(v:{type:string;value:number}[]|null){
    const list=Array.isArray(v)?v:[];
    if(list.length===0){this.options={};return;}

    this.options=<EChartsOption>{
      tooltip:{trigger:'item'},
      legend:{top:'5%'},
      series:[{
        type:'pie',
        radius:['50%','80%'],
        avoidLabelOverlap:false,
        label:{show:false},
        labelLine:{show:false},
        data:list.map(p=>({name:p.type,value:p.value})),
        top: '15%'
      }]
    };
  }
  options:EChartsOption={};
}
