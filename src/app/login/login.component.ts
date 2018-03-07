import {FormBuilder, FormGroup} from '@angular/forms';
import {Component} from '@angular/core';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  complexForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.complexForm = fb.group({

      'email': [null, Validators.compose([Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(20)])],

      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    });
  }

  submitForm(value: any): void {

    this.router.navigate(['/home']);
    console.log(value);


  }

}
