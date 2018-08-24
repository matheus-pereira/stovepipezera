import { NgModule } from "@angular/core";
import { CrmComponent } from "./crm.component";
import { CommonModule } from "@angular/common";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { CrmRoutingModule } from "./crm.routing.module";
import { AuthService } from "../auth/auth.service";
import { ContatosModule } from "./contatos/contatos.module";
import { PipelineModule } from "./pipeline/pipeline.module";
import { DashboardsModule } from "./dashboards/dashboards.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ContatoService } from "./contatos/contato/contato.service";

@NgModule({
    declarations: [
        CrmComponent
    ],
    imports: [
        CommonModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        RouterModule,
        ReactiveFormsModule,
        ContatosModule,
        PipelineModule,
        DashboardsModule,
        CrmRoutingModule
    ],
    providers: [
        AuthService,
        ContatoService
    ]
})
export class CrmModule { }