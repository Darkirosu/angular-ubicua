import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicateService } from 'src/app/services/comunicate/comunicate.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-seat-card',
  templateUrl: './seat-card.component.html',
  styleUrls: ['./seat-card.component.scss']
})
export class SeatCardComponent implements OnInit {

  constructor(private ComunicateService: ComunicateService, private router: Router) { 
    this.item$ = new EventEmitter();
  }

  @Input()
  user: User;

  @Output()
  testing: EventEmitter<string> = new EventEmitter();

  id: number;
  name: String;
  surname: String;
  age: number;
  job: String;
  public item$: EventEmitter<number>;

  ngOnInit() {
    this.id=this.user.id;
    this.job=this.user.job;
    this.name=this.user.name;
    this.surname=this.user.surname;
    this.age=this.user.age;
  }

}
