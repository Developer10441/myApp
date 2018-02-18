import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// rich grid
import {RichGridComponent} from "./rich-grid-example/rich-grid.component";
import {HeaderComponent} from "./header-component/header.component";
import {HeaderGroupComponent} from "./header-group-component/header-group.component";
import { ImbalanceMonthComponentComponent } from './imbalance-month-component/imbalance-month-component.component';
import { InKindPayMonthComponent } from './in-kind-pay-month/in-kind-pay-month.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                HeaderComponent,
                HeaderGroupComponent
            ]
        )
    ],
    declarations: [
        AppComponent,
        RichGridComponent,
        HeaderComponent,
        HeaderGroupComponent,
        ImbalanceMonthComponentComponent,
        InKindPayMonthComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
