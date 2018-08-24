import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DragulaModule } from 'ng2-dragula';
import { ContatoService } from "../contatos/contato/contato.service";
import { PipelineComponent } from "./pipeline.component";
import { FilterByStatusPipe } from './filter-by-status.pipe';

@NgModule({
    declarations: [
        PipelineComponent,
        FilterByStatusPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        DragulaModule.forRoot()
    ],
    providers: [
        ContatoService
    ]
})
export class PipelineModule { }