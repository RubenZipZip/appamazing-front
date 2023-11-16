import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  initialLetter = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => {
      this.initialLetter = this.calculateInitialLettersData(data);
    })
  }

  //itera por cada uno de los contactos, con los datos result y contact
  calculateInitialLettersData(contacts: any[]): any {
    return contacts.reduce((result, contact) => {
      const initial = contact.surname1.charAt(0).toUpperCase(); //inicial del apellido
      if (result.find(item => item.name === initial)) { // busca en el array un objeto nombre con la inicial
        result.find(item => item.name === initial).value++;
      } else {
        result.push({ name: initial, value: 1 });
      }
      return result;
      // inicializamos con array vacio que se va a ir rellenando con el return

    }, [])

  }

}
