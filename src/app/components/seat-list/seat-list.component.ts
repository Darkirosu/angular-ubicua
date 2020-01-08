import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';
import { ComunicateService } from 'src/app/services/comunicate/comunicate.service';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {

  users: User[] =[];

  constructor(private ComunicateService: ComunicateService, private router: Router) { }

  async ngOnInit() {
    await this.ComunicateService.getusers().then((json)=>{this.users=json})
  }

}
