import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/User';
import { Status } from 'src/app/model/Status';

@Injectable({
  providedIn: 'root'
})
export class ComunicateService {

  constructor(private http: HttpClient) { }

  userdefault: User;


  async gettemperature(user: User){
    const respuesta = await fetch('http://localhost:8080/temperatures',
      {method: 'POST', 
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
      const json = await respuesta.json()
      return json
  }

  async getpressure(user: User){
    const respuesta = await fetch('http://localhost:8080/pressures',
      {method: 'POST', 
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
      const json = await respuesta.json()
      return json
  }


  async getlasttemperature(user: User){
    const respuesta = await fetch('http://localhost:8080/lasttemperature',
      {method: 'POST', 
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
      const json = await respuesta.json()
      return json
  }



  async getuser(user: User){
    const respuesta = await fetch('http://localhost:8080/user',
      {method: 'POST', 
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
      const json = await respuesta.json()
      return json
  }

  async setaccess(user: User){
    const respuesta = await fetch('http://localhost:8080/access',
      {method: 'POST', 
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
  })
    const json = await respuesta.json()
    return json
  }


  async getusers(){
    const respuesta = await fetch('http://localhost:8080/users',
      {method: 'GET',  // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
  })
    const json = await respuesta.json()
    return json
  }

  async getlastpressure(user: User){
    const respuesta = await fetch('http://localhost:8080/lastpressure',
    {method: 'POST', 
    body: JSON.stringify(user), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    })
      const json = await respuesta.json()
      return json
  }

  async setstatus(status: Status){
    const respuesta = await fetch('http://localhost:8080/status',
    {method: 'POST', 
    body: JSON.stringify(status), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    })
      
  }
}
