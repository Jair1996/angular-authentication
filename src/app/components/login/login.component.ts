import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  showSpinner: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  isTheFieldInvalid(campo: string) {
    return (
      this.loginForm.controls[campo].errors &&
      this.loginForm.controls[campo].dirty
    );
  }

  login() {
    this.showSpinner = true;

    this.authService
      .login(this.loginForm.value)
      .then((_) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((_) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrecta',
        });
      })
      .finally(() => {
        this.showSpinner = false;
      });
  }

  loginWithGoogle() {
    this.showSpinner = true;
    this.authService
      .loginWithGoogle()
      .then((_) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((_) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrio un error, inténtelo neuvamente.',
        });
      })
      .finally(() => {
        this.showSpinner = false;
      });
  }
}
