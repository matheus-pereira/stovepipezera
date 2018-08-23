import { NgModule } from "@angular/core";
import { LigacoesComponent } from "./ligacoes.component";
import { LigacaoFormComponent } from "./ligacao-form/ligacao-form.component";
import { LigacaoListComponent } from "./ligacao-list/ligacao-list.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LigacoesComponent,
        LigacaoFormComponent,
        LigacaoListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LigacoesModule {

}