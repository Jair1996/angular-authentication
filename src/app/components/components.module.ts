import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SpinnerComponent
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
