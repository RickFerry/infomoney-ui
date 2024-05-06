import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "primeng/components/button/button";
import { DataTableModule } from "primeng/components/datatable/datatable";
import { InputTextModule } from "primeng/components/inputtext/inputtext";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InputTextModule, ButtonModule, DataTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
