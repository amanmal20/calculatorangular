import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  projectTitle: String = 'Calculator';

  displayValue: string = '0';
  onButtonClick(value: string) {
    this.displayValue = this.displayValue + value;
  }

  onButtonClickClr() {
    this.displayValue = '';
  }
  onButtonClickAns() {
    let result: string = '';
    try {
      result = eval(this.displayValue);

      this.displayValue = result;
    } catch (error) {
      this.displayValue = 'INVALID INPUT';
    }
  }
}
