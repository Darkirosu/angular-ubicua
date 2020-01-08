import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.container.html',
  styleUrls: ['./menu.container.scss'],
  providers: [GlobalService]
})
export class MenuContainer implements OnInit {

  id: number;
  admin: boolean;


  constructor(public _global:GlobalService) { 
  }

  ngOnInit() {
    this.id=this._global.getUser();
    this.admin=this._global.getAdmin();
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
