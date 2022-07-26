import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthentificationService,
    private router: Router, private formBuilder: FormBuilder ) { }
    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  get formControls() { return this.loginForm.controls; }
  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.seConnecter(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }
}
