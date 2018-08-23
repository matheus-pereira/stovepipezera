import { NgModule } from "@angular/core";
import { DashboardsComponent } from "./dashboards.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DashboardsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DashboardsComponent
    ]
})
export class DashboardsModule {

}