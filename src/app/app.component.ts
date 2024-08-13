import { Component, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestResultsComponent } from "./invest-results/invest-results.component";
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
