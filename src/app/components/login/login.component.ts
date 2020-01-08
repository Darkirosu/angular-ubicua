import { Component, OnInit, EventEmitter , Output,Inject } from '@angular/core';
import { User } from 'src/app/model/User';
import { GlobalService } from 'src/app/services/global/global.service';
import { ComunicateService } from 'src/app/services/comunicate/comunicate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [GlobalService]
})
export class LoginComponent implements OnInit {


  @Output()
  testing: EventEmitter<string> = new EventEmitter();

  user: string;
  password: string;
  loginuser: User;
  acceder: number;
  id: number;
  admin: boolean;
  public item$: EventEmitter<number>;

  constructor(private ComunicateService: ComunicateService, public _global:GlobalService,private router: Router) {
    this.btnClickclean();
    this.item$ = new EventEmitter();
   }

  ngOnInit() {
    this.id=this._global.getUser();
    this.admin=this._global.getAdmin();
  }

  

  async btnClicklogin() {
    if(this.user==""|| this.password==""){
      alert("Rellene los campos.");
    }else{
      this.loginuser= new User(-1,"",this.password,"","",0,false,this.user)
      await this.ComunicateService.setaccess(this.loginuser).then((json)=>{this.loginuser=json}) 

      if(this.loginuser.id<0){
        this._global.setUser(this.id,this.admin)
        this.id=this.loginuser.id;
        this.admin=this.loginuser.admin;
        console.log("set")
        console.log(this.admin);
        alert("Gracias por loguearte");
        this.btnClickclean();
        this.btnClickfind();
      }else{
        alert("Datos incorrectos");
      }

    }
  
  };
  

  btnClickfind() {
    this.item$.emit(this.loginuser.id);
    this.router.navigate(['/information']);
  }


  btnClickclean(){
    this.user="";
    this.password="";
  };

}
