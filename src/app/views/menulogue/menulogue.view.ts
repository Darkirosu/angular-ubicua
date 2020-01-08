import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-menulogue',
  templateUrl: './menulogue.view.html',
  styleUrls: ['./menulogue.view.scss']
})
export class MenulogueView implements OnInit {

  constructor(private router: Router) { }

  userLogue: User;

  ngOnInit() {
  }

}
