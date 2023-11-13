import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model/Contact';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  contact: Contact = new Contact();
  /*
  name: string;
  surname1: string;
  surname2: string;
  telephone: string;
  email: string;
  
 */

  constructor(private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
  }

  newContact(){
    const contact ={
      name: this.contact.name,
      surname1: this.contact.surname1,
      surname2: this.contact.surname2,
      telephone: this.contact.telephone,
      email: this.contact.email,
      puestoTrabajo: this.contact.puestoTrabajo.id


    }

    this.contactsService.newContact(contact);
    this.navigateToHome();
  }

navigateToHome(){
  this.router.navigate(['/contacts']);
}
cancelInsert(){
  this.navigateToHome();
}

}
