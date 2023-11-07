import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})

export class ContactHomeComponent implements OnInit  {
  contacts: any = [] ;
   // creamos constructor para llamar el servicio

  constructor(private contactsService: ContactsService){}

// lo que se meta en el noOnit lo carga antes del html para que la tabla no salga vacia
 ngOnInit(): void {
  this.contactsService.getContacts().subscribe(data =>{
    this.contacts = data
  })
   
 } 
 
 displayedColumns: string[] = ['id', 'name', 'surname1', 'surname2', 'telephone', 'email'];
  
  
  }


