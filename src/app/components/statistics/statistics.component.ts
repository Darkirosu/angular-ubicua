import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComunicateService } from 'src/app/services/comunicate/comunicate.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics-component',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input()
  id: number;

  nameboton: String;
  admin: boolean;

  constructor(private router: ActivatedRoute,private ComunicateService: ComunicateService, public _global:GlobalService) { 
  }

  ngOnInit() {
  }

  liineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  


}
