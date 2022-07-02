import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  length: number = 0;
  includeUppercaseLetters: boolean = false;
  includeLowercaseLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  input123: string = '';

  constructor(private clipboardApi: ClipboardService) {}

  modifyUppercaseLetters() {
    this.includeUppercaseLetters = !this.includeUppercaseLetters;
  }

  modifyLowercaseLetters() {
    this.includeLowercaseLetters = !this.includeLowercaseLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  modifyLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  buttonClick() {
    const numbers = '1234567890';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*().,+-';

    let validChars = '';

    if (this.includeUppercaseLetters) {
      validChars += lowercaseLetters;
    }
    if (this.includeLowercaseLetters) {
      validChars += uppercaseLetters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
      this.password = generatedPassword;
    }
  }

  copy() {
    this.clipboardApi.copyFromContent(this.password);
  }
}
