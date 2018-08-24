import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { ContatoFormComponent } from "./contato-form/contato-form.component";
import { ContatoListComponent } from "./contato-list/contato-list.component";
import { ContatoService } from "./contato/contato.service";

@NgModule({
    declarations: [
        ContatoFormComponent,
        ContatoListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ContatoFormComponent,
        ContatoListComponent
    ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule {

}