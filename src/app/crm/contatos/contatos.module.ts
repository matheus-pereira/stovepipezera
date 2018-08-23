import { NgModule } from "@angular/core";
import { ContatoFormComponent } from "./contato-form/contato-form.component";
import { ContatoListComponent } from "./contato-list/contato-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

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
    ]
})
export class ContatosModule {

}