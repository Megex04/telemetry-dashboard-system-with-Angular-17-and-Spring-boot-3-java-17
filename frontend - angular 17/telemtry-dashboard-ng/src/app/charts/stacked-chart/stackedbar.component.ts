import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector:'app-stacked-bar',
  standalone:true,
  imports:[NgxEchartsModule],
  template:`<div echarts [options]="options" class="chart"></div>`,
  styles:[`.chart{width:700px;height:300px;max-width:100%;}`]
})
export class StackedBarComponent{
  @Input() set data(v:{zone:string;ok:number;warning:number;error:number}[]|null){
    const list=Array.isArray(v)?v:[];
    if(list.length===0){this.options={};return;}

    this.options=<EChartsOption>{
      tooltip:{trigger:'axis',axisPointer:{type:'shadow'}},
      legend:{},
      xAxis:{type:'category',data:list.map(p=>p.zone)},
      yAxis:{type:'value'},
      series:[
        {name:'OK',type:'bar',stack:'a',data:list.map(p=>p.ok),itemStyle:{color:'#82ca9d'}},
        {name:'Warning',type:'bar',stack:'a',data:list.map(p=>p.warning),itemStyle:{color:'#ffc658'}},
        {name:'Error',type:'bar',stack:'a',data:list.map(p=>p.error),itemStyle:{color:'#ff7373'}}
      ]
    };
  }
  options:EChartsOption={};
}
