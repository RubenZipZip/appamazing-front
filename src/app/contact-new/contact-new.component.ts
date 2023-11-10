import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  name: string;
  surname1: string;
  surname2: string;
  telephone: string;
  email: string;
 

  constructor(private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
  }

  newContact(){
    const contact ={
      name: this.name,
      surname1: this.surname1,
      surname2: this.surname2,
      telephone: this.telephone,
      email: this.email


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
