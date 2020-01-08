import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-container',
  templateUrl: './information.container.html',
  styleUrls: ['./information.container.scss']
})
export class InformationContainer implements OnInit {

  @Input()
  id: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
