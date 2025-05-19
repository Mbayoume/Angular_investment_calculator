import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { FormsModule } from '@angular/forms';

import { type InputsData } from './user-inputs/inputsData.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type AnnualInvestmentResult } from './investment-results/results-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputsComponent, FormsModule, InvestmentResultsComponent]
})
export class AppComponent {

  calculateResults:AnnualInvestmentResult[] = []; //holding the types 

  
  calculateInvestmentResults(inputsData: InputsData) {

    // const results = this.calculateResults
    const annualData = [];
    let investmentValue = inputsData.annualInvestment;
  
    for (let i = 0; i < inputsData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (inputsData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + inputsData.annualInvestment;
      const totalInterest =
        investmentValue - inputsData.annualInvestment * year - inputsData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: inputsData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: inputsData.initialInvestment + inputsData.annualInvestment * year,
      });
    }
  
    this.calculateResults = annualData;
  }
  

}
