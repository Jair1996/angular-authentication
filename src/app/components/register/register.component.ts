import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  showSpinner: boolean = false;

  registerForm: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  isTheFieldInvalid(campo: string) {
    return (
      this.registerForm.controls[campo].errors &&
      this.registerForm.controls[campo].dirty
    );
  }

  register() {
    this.showSpinner = true;
    this.authService
      .register(this.registerForm.value)
      .then((_) => {
        this.router.navigate(['/login']);
      })
      .catch((_) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El correo ya ha sido registrado',
        });
      })
      .finally(() => {
        this.showSpinner = false;
      });
  }
}
