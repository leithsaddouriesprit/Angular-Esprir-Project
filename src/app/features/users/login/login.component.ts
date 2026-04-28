import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

email= new FormControl('', [Validators.required, Validators.email]);
pwd = new FormControl('', [Validators.required, Validators.minLength(6)]);



login = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  cin: new FormControl('', [Validators.required, Validators.minLength(6)])
})

save () {
  console.log(this.email.value);
  console.log(this.pwd.value);  
}
}
    