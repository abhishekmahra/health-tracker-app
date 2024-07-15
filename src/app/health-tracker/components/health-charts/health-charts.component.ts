import { Component, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-health-charts',
  templateUrl: './health-charts.component.html',
  styleUrls: ['./health-charts.component.css']
})
export class HealthChartsComponent {
public chart:any

constructor(){}

  ngOnInit(): void {
    this.createChart();
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit(){
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

  }

  
createChart(){
  
  this.chart = new Chart("MyChart", {
    type: 'bar', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
               '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
       datasets: [
        {
          label: "Sales",
          data: ['467','576', '572', '79', '92',
               '574', '573', '576'],
          backgroundColor: 'blue'
        },
        {
          label: "Profit",
          data: ['542', '542', '536', '327', '17',
                 '0.00', '538', '541'],
          backgroundColor: 'limegreen'
        }  
      ]
    },
    options: {
      aspectRatio:2.5
    }
    
  });
}
}






