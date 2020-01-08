import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.view.html',
  styleUrls: ['./information.view.scss']
})
export class InformationView implements OnInit {

  constructor(private activedroute: ActivatedRoute,private router: Router) { }

  id;

  sub;

  ngOnInit() {
    this.id=this.activedroute.snapshot.paramMap.get('id');
  }

}
