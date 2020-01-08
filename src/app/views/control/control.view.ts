import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.view.html',
  styleUrls: ['./control.view.scss']
})
export class ControlView implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
