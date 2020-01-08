import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { ComunicateService } from 'src/app/services/comunicate/comunicate.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { Temperature } from 'src/app/model/Temperature';
import { Pressure } from 'src/app/model/Pressure';
import { Status } from 'src/app/model/Status';


@Component({
  selector: 'app-information-component',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, OnChanges {

  
  choosetemperature: number;
  manual: boolean;
  active: boolean;
  loginuser: User;
  temperature: Temperature;
  pressure: Pressure;
  userpep: User;
  status: Status;
  temperaturedata;

  x: number;
  y: number;
  t1: number;
  t2: number;
  t3: number;
  ftotal: number;

  @Input()
  id: number;

  nameboton: String;
  admin: boolean;

  constructor(private router: ActivatedRoute,private ComunicateService: ComunicateService, public _global:GlobalService) { 
    this.data();
    this.update();
  }

  async  ngOnInit() {
    this.admin=this._global.getAdmin();
    this.data();
    if(this.loginuser.admin==true){
      this.nameboton="MENU";
    }else{
      this.nameboton="DESCONECTAR"
    }
    this.update();
    this.active=false;
    this.manual=false;
    this.temperaturedata=0;
  }

  async data(){
    this.loginuser= new User(this.id,"","","","",0,false,"")
    await this.ComunicateService.getuser(this.loginuser).then((json)=>{this.loginuser=json}) 
  }

  btnClick(){
    
  }

  ngOnChanges(){
    
  }

  async btnsend(){
    this.status = new Status(+this.id,this.manual,this.temperaturedata,this.active);
    await this.ComunicateService.setstatus(this.status); 
  }

  async update(){
    this.userpep = new User(+this.loginuser.id,"","","","",0,false,"");
    await this.ComunicateService.getlasttemperature(this.userpep).then((json)=>{this.temperature=json}) 
    await this.ComunicateService.getlastpressure(this.userpep).then((json)=>{this.pressure=json}) 
    
    this.t1=this.pressure.pressure4+this.pressure.pressure3;
    this.t2=this.pressure.pressure4+this.pressure.pressure2;
    this.t3=this.pressure.pressure4+this.pressure.pressure2+this.pressure.pressure3+this.pressure.pressure1;
    this.x=this.t1/this.t3;
    this.y=this.t2/this.t3;

    this.ftotal=Math.sqrt(Math.pow(0.5-this.x,2)+Math.pow(0.5-this.y,2));
    if(this.ftotal>0.2){
      alert("Estas mal sentado. Corrige tu postura, por favor");
    }else{
      alert("Estas bien sentado. Sigue asi");
    }

    
  }
  
}
