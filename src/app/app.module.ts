import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestResultsComponent } from "./invest-results/invest-results.component";
import { HeaderComponent } from "./header/header.component";
import { CurrencyPipe } from "@angular/common";
@NgModule({
    declarations:[AppComponent,HeaderComponent, UserInputComponent,InvestResultsComponent],
    imports:[BrowserModule, FormsModule,CurrencyPipe],
    bootstrap:[AppComponent]

})
export class AppModule{

}