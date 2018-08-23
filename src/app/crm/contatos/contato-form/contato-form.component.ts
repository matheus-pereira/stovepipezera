import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContatoService } from '../contato/contato.service';
import { Contato } from '../contato/contato';

@Component({
    selector: 'app-contato-form',
    templateUrl: './contato-form.component.html'
})
export class ContatoFormComponent implements OnInit {

    contactForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: [''],
            phone: [''],
            clients: [''],
            revenue: [''],
            obs: ['']
        });
    }

    save() {
        const contato: Contato = this.contactForm.getRawValue();
        contato.status = 'oportunidade';
        // this.contatoService.save(contato);
        // this.router.navigate(['contacts']);
    }

}
