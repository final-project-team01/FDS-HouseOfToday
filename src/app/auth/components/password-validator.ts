import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(passwordGroup: AbstractControl) {
    const pw = passwordGroup.get('password').value;
    const confirmPw = passwordGroup.get('confirmPassword').value;
    if (pw !== confirmPw) {
      return { match: { pw, confirmPw } }
    } else return null;
  }
}
