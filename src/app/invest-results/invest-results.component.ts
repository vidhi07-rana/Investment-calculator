import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-invest-results',
  templateUrl: './invest-results.component.html',
  styleUrl: './invest-results.component.css'
})
export class InvestResultsComponent {
 constructor(private investmentservice : InvestmentService){

 }
get results(){
 return this.investmentservice.resultsData;
}
}
