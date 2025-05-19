import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InputsData } from './inputsData.model';
@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css'
})


export class UserInputsComponent {



initialInvestmentInput = '';
annualInvestmentInput = '';
expectedReturnInput = '';
durationInput = '';


@Output() calculateData = new EventEmitter<InputsData>()



onSubmitForm(){
  console.log(this.annualInvestmentInput);
  console.log(this.expectedReturnInput);
  console.log(this.annualInvestmentInput);
  console.log(this.durationInput)
  this.calculateData.emit({
    // we will use (+) operator before this to turn the string value into numbers 
    annualInvestment:+this.annualInvestmentInput,
    initialInvestment:+this.initialInvestmentInput,
    expectedReturn:+this.expectedReturnInput,
    duration:+this.durationInput
  })
}


}
