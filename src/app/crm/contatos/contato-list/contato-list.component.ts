import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato/contato.service';
import { Contato } from '../contato/contato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html'
})
export class ContatoListComponent implements OnInit {

  contatos: any[] = [];

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contatoService.listarContatos()
      .subscribe(contatos =>  this.contatos = contatos);
  }

  editarContato(contatoId) {
    this.router.navigate(['crm', 'contatos', contatoId]);
  }
  
}
