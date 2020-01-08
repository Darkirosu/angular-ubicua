import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  } 

  btnClick(url: string) {
    this.router.navigateByUrl(url);
  };

}
