import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatuser',
  templateUrl: './seatuser.view.html',
  styleUrls: ['./seatuser.view.scss']
})
export class SeatuserView implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
