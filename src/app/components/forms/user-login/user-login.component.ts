import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ENTER_WITH,
  INVALID_EMAIL,
  MUST_HAVE_VALUE,
  SEND,
  YOUR_EMAIL,
  YOUR_PASSWORD,
} from 'src/app/constants/constants';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  labelEmail = `${ENTER_WITH} ${YOUR_EMAIL}`;
  labelPassword = `${ENTER_WITH} ${YOUR_PASSWORD}`;
  labelSendButton = SEND;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return MUST_HAVE_VALUE;
    }
    if (this.password.hasError('required')) {
      return MUST_HAVE_VALUE;
    }

    return this.email.hasError('email') ? INVALID_EMAIL : '';
  }

  constructor(
    private auth: UserAuthenticationService,
    private modal: MatDialog
  ) {}

  validateAndSend(event: Event) {
    event.preventDefault();
    this.email.markAsTouched();
    this.password.markAsTouched();

    if (this.email.valid && this.password.valid) {
      this.auth
        .login(this.email.value, this.password.value)
        .subscribe((data) => {
          if (data !== undefined) {
            this.modal.closeAll();
          }
        });
    }
  }
}
