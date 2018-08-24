import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardsComponent } from "./dashboards.component";

@NgModule({
    declarations: [
        DashboardsComponent
    ],
    imports: [
        CommonModule,
        HighchartsChartModule
    ],
    exports: []
})
export class DashboardsModule {

}