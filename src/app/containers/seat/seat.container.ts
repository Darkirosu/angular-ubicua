import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicateService } from 'src/app/services/comunicate/comunicate.service';


@Component({
  selector: 'app-seat',
  templateUrl: './seat.container.html',
  styleUrls: ['./seat.container.scss']
})
export class SeatContainer implements OnInit {

  constructor(private router: Router,private ComunicateService: ComunicateService) { }

  ngOnInit() {
  }

}
