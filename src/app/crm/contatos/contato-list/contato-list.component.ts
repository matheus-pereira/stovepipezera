import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato/contato.service';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html'
})
export class ContatoListComponent implements OnInit {

  contacts: any;

  constructor(
    private contactService: ContatoService
  ) { }

  ngOnInit() {
    // this.contactService.list()
    //   .subscribe(contacts => {
    //     this.contacts = contacts;
    //   });
  }
  
}
