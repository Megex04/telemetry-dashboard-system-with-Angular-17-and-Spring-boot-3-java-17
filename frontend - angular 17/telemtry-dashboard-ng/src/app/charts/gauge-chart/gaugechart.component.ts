import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector:'app-gauge-chart',
  standalone:true,
  imports:[NgxEchartsModule],
  template:`<div echarts [options]="options" class="chart"></div>`,
  styles:[`.chart{width:260px;height:260px;}`]
})
export class GaugeChartComponent{
  @Input() set value(v:number|null|undefined){
    const val=typeof v==='number'?v:0;
    this.options=<EChartsOption>{
      series:[{
        type:'gauge',
        startAngle:180,endAngle:0,
        min:0,max:100,
        progress:{show:true,width:18},
        axisLine:{lineStyle:{width:18}},
        axisTick:{show:false},
        splitLine:{show:false},
        axisLabel:{show:false},
        pointer:{show:false},
        detail:{
          valueAnimation:true,
          fontSize:24,
          offsetCenter:[0,'20%'],
          formatter: (value:number) => `% ${value}`
        },
        data:[{value:val,name:''}]
      }]
    };
  }
  options:EChartsOption={};
}
