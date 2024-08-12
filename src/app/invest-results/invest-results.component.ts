import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invest-results',
  standalone: true,
  imports: [],
  templateUrl: './invest-results.component.html',
  styleUrl: './invest-results.component.css'
})
export class InvestResultsComponent {
  @Input() results? :{year: number;
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
 }[]

}
