import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
