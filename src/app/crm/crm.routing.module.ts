import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrmComponent } from './crm.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ContatoListComponent } from './contatos/contato-list/contato-list.component';
import { ContatoFormComponent } from './contatos/contato-form/contato-form.component';
import { LigacoesComponent } from './pipeline/ligacoes/ligacoes.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

const routes = [
  {
    path: '',
    component: CrmComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pipeline'
      },
      {
        path: 'pipeline',
        component: PipelineComponent
      },
      {
        path: 'pipeline/contato/:contactId',
        component: LigacoesComponent
      },
      {
        path: 'contatos',
        component: ContatoListComponent
      },
      {
        path: 'contatos/:id',
        component: ContatoFormComponent
      },
      {
        path: 'dashboards',
        component: DashboardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
