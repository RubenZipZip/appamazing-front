import {  Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { ContactDeleteComponent } from '../contact-delete/contact-delete.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})

export class ContactHomeComponent implements OnInit  {
  contacts: any = [] ;
   

  constructor(private contactsService: ContactsService, private router: Router, public dialog: MatDialog){}

// lo que se meta en el noOnit lo carga antes del html para que la tabla no salga vacia
 ngOnInit(): void {
  this.contactsService.getContacts().subscribe(data =>{
    this.contacts = data;
  
  })

   
 } 

 openDetailForm(row: any){
  // metodo navigate la ruta del formulario+campo que clickcamos
  this.router.navigate(['/contact', row.id]);
  // tiene que enrutar a contact detail , vamos al constructor y añadimos private router:Router

 }

 editContactDetail(contact: any){
  this.router.navigate(['/contact/edit', contact]);
 }
 
 openDeleteDialog(contactId: number): void{
  this.dialog.open(ContactDeleteComponent, {data: {contactId: contactId}});
 }
 displayedColumns: string[] = ['id', 'name', 'surname1', 'surname2', 'telephone', 'email', 'actions'];
  
  
  }


