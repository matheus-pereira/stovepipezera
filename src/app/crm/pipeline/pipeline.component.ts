import { Component, OnInit } from "@angular/core";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";
import { ContatoService } from "../contatos/contato/contato.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './pipeline.component.html'
})
export class PipelineComponent implements OnInit {

    subscriptions = new Subscription();
    contatos: any = [];

    constructor(
        private dragulaService: DragulaService,
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit() {
        this.contatoService
            .listarContatos()
            .subscribe(contatos => this.contatos = contatos);

        this.subscriptions.add(this.dragulaService.drop()
            .subscribe(({ name, el, target, source, sibling }) => {
                const origem = source.getAttribute('pipe');
                const destino = target.getAttribute('pipe');
                if (origem != destino) {
                    this.contatoService.alterarStatus(el.id, destino);
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    
}