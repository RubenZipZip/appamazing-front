import { Component, OnInit } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  surname1: string;
  surname2: string;
  telephone: string;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {id:1, name: 'oscar', surname1: 'gomez', surname2: 'pardiñas', telephone: '34455', email:'ruben@email.com'},
  {id:1, name: 'pedro', surname1: 'lopez', surname2: 'cimade', telephone: '34455', email:'ruben@email.com'},
  {id:1, name: 'jose', surname1: 'tanxu', surname2: 'vilaxoan', telephone: '39455', email:'rube2n@email.com'},
  {id:1, name: 'jung', surname1: 'alvarez', surname2: 'pardevila', telephone: '38455', email:'rube4n@email.com'},
  {id:1, name: 'carl', surname1: 'borbon', surname2: 'fondevila', telephone: '34455', email:'ruben1@email.com'},
  {id:1, name: 'gustav', surname1: 'arritz', surname2: 'cordeiro', telephone: '359855', email:'ruben@email.com'},
  {id:1, name: 'jairo', surname1: 'sanse', surname2: 'xanbitz', telephone: '34345', email:'ruben@emmaail.com'},
  {id:1, name: 'ricardo', surname1: 'almeida', surname2: 'eldaya', telephone: '344565', email:'ruben@emammil.com'},
  {id:1, name: 'pepe', surname1: 'saavedra', surname2: 'fontvedra', telephone: '342355', email:'ruben@emaimml.com'},
  {id:1, name: 'ivana', surname1: 'seoane', surname2: 'potes', telephone: '343455', email:'ruben@emailmm.com'},
  
];

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent  {
  displayedColumns: string[] = ['id', 'name', 'surname1', 'surname2', 'telephone', 'email'];
  dataSource = ELEMENT_DATA;
  
  }


