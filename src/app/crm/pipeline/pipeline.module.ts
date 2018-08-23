import { NgModule } from "@angular/core";
import { PipelineComponent } from "./pipeline.component";
import { LigacoesModule } from "./ligacoes/ligacoes.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        PipelineComponent
    ],
    imports: [
        CommonModule,
        LigacoesModule
    ]
})
export class PipelineModule {

}