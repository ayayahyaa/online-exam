import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-msg-pattern',
  imports: [],
  templateUrl: './msg-pattern.component.html',
  styleUrl: './msg-pattern.component.scss'
})
export class MsgPatternComponent {

  objectKeys = Object.keys;
  @Input() form: any;
  @Input() field: string = '';
  @Input() errorMessages: { [key: string]: string } = {};

  get errors(): ValidationErrors | null {
    const control = this.form.get(this.field);
    return control ? control.errors : null;
  }

  getErrorMessage(errorKey: string): string {
    return this.errorMessages[errorKey] || '';
  }
}
