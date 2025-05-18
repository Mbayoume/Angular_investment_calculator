import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputsComponent,FormsModule]
})
export class AppComponent {}
