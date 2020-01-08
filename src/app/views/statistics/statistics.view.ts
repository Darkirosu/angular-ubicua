import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.view.html',
  styleUrls: ['./statistics.view.scss']
})
export class StatisticsView implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
