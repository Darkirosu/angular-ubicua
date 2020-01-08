import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {
  id: number;
  admin: boolean;

  constructor(private router: Router,public _global:GlobalService) { }

  ngOnInit() {
    this.id=this._global.getUser();
    this.admin=this._global.getAdmin();
    console.log(this.admin)
    console.log(Math.pow(2,5))
  }

  btnClick(url: string) {
    this.router.navigateByUrl(url);
  };
}
