import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css'
})


export class UserInputsComponent {

initialInvestmentInput = '0';
annualInvestmentInput = '0';
expectedReturnInput = '0';
durationInput = '0';


@Output() submitData = new EventEmitter<string>()



onSubmitForm(){
  console.log(this.annualInvestmentInput);
  console.log(this.expectedReturnInput);
  console.log(this.annualInvestmentInput);
  console.log(this.durationInput)
}

}
