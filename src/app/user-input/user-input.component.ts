import { Component, EventEmitter, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';  
 constructor(private investmentservice: InvestmentService){}
  onSubmit() {
    console.log('Form submitted with data:', {
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn
    });
  

    this.investmentservice.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn
    });
  }
}
