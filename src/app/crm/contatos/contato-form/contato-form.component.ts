import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from '../contato/contato.service';
import { Contato } from '../contato/contato';

@Component({
    selector: 'app-contato-form',
    templateUrl: './contato-form.component.html'
})
export class ContatoFormComponent implements OnInit {

    contatoForm: FormGroup;
    contatoId: string;

    constructor(
        private formBuilder: FormBuilder,
        private contatoService: ContatoService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.contatoId = this.route.snapshot.params['id'];
        this.contatoForm = this.formBuilder.group({
            id: [this.contatoId],
            nome: ['', Validators.required],
            email: [''],
            telefone: [''],
            endereco: [''],
            numeroDeClientes: [''],
            faturamentoMedio: [''],
            observacao: [''],
            classificacao: ['Potencial indefinido'],
            status: ['oportunidade'],
            dataCriacao: [new Date()]
        });

        if (this.contatoId != 'new') {
            const query = this.contatoService.buscarContato(this.contatoId);
            query.then(response => this.contatoForm.patchValue(response.data()));
        }
    }

    salvarContato() {
        const contato: Contato = this.contatoForm.getRawValue();
        this.contatoService.salvarContato(contato);
        this.router.navigate(['crm', 'contatos']);
    }

}
