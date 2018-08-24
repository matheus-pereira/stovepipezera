import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Contato } from "./contato";

@Injectable()
export class ContatoService {

    constructor(
        private database: AngularFirestore
    ) { }

    listarContatos() {
        return this.database.collection('contatos').valueChanges();
    }

    salvarContato(contato: any) {
        if (contato.id === 'new') contato.id = this.database.createId();
        this.database.collection('contatos').doc(contato.id).set(contato);
    }

    buscarContato(contatoId) {
        return this.database.collection('contatos').doc(contatoId).ref.get();
    }

    alterarStatus(contatoId, novoStatus) {
        this.buscarContato(contatoId)
            .then(response => {
                const contato = response.data();
                contato.status = novoStatus;
                this.salvarContato(contato);
            });
    }
    
}