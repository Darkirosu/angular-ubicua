import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginView implements OnInit {

  posini: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => this.posini = params['caller']);
  }

}
