import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  initialLetter = [];
  contactsByFullName =[]
  emailExtensions= []
  phonePrefixData= []

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => {
      this.initialLetter = this.calculateInitialLettersData(data);
      this.contactsByFullName = this.calculateContactsByFulNameDaTA(data);
      this.emailExtensions = this.calculateEmailExtensionsData(data);
      this.phonePrefixData = this.generatePhonePrefixData(data);
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

  //grafica 
calculateContactsByFulNameDaTA(contacts: any[]): any{

  let tempContactsByFullName =[{
    name: 'Contacts',
    series: []
  }];

  contacts.forEach(contact =>{

    const fullName = contact.name + contact.surname1 + contact.surname2;
    const size = fullName.length; // tamaño del nombre
    const range =`${size - (size % 5)} - ${size - (size % 5) + 4} ch.`;
    let existingRange = tempContactsByFullName[0].series.find(item => item.name === range); //para saber si esta el rango en existingRange
    if(existingRange)  {
      
      existingRange.value++;

    }else{
      tempContactsByFullName[0].series.push({name: range, value:1});
    }
 
  });
  return tempContactsByFullName.map(entry =>{
    return{
      ...entry, //recorre entry y ordena el array series [], compara dos elementos dentro del sor por name
      series: entry.series.sort((a,b) => Number(a.name.split('_')[0]) - Number(b.name.split('_')[0])) // ordenar mapa , clave-valor
    }
  });
}


calculateEmailExtensionsData(contacts: any[]): any{

  let emailExtensionsMap = new Map<string, number>();

  contacts.forEach(contact =>{ 
    let emailParts = contact.email.split('@'); //separa el email por partes separado desde el @
    if(emailParts.length ==2){
      const domain =emailParts[1]; // cogemos la segunda parte no [0]
      const firstDotIndex = domain.indexOf('.'); //busca en el string el caracter e informala posicion en la que está
      if(firstDotIndex != -1){ // si existe (da -1 uno si no)
        const extension = domain.substring(firstDotIndex); 
      if(emailExtensionsMap.has(extension)){
        emailExtensionsMap.set(extension, emailExtensionsMap.get(extension)+1)
      } else{
        emailExtensionsMap.set(extension, 1);
      }
      }
      }
    }); // recorremos mapa, nos devuelve value,key
    let emailExtensions = [];
    emailExtensionsMap.forEach((value, key) =>{
      emailExtensions.push({name: key, value: value});
      
    });
    return emailExtensions;
  }
  generatePhonePrefixData(contacts:any []): any {
    let phonePrefixData = [];
    let prefixCounts ={};
    contacts.forEach(contact =>{ //recorrer todos los contactos
      const phonePrefix =contact.telephone.substring(0,1); // (0,1)los dos primeros numeros
    
    //controlar si existe o lo agregamos
    if(prefixCounts[phonePrefix]){
      prefixCounts[phonePrefix]++;
   }
    else{
      prefixCounts[phonePrefix] = 1;
    }
  })
  for(let prefix in prefixCounts){
    if(prefixCounts.hasOwnProperty(prefix)){
      phonePrefixData.push({name: prefix, value: prefixCounts[prefix]})
    }

  }
  return phonePrefixData;
}
}




