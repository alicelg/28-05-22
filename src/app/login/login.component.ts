import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  accessForm: FormGroup = this.fb.group({
    password: ['', [Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.accessForm.value.password === '12345') {
      localStorage.setItem('isLogged', 'true');
      this.router.navigate(['home']);
    } else {
      this.accessForm.setErrors({ incorrect: true });
    }

  }

}
