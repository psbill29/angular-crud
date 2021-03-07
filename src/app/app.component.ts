import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  loginform=new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  get username(){return this.loginform.get('username')}
  get password(){return this.loginform.get('password')}

  data="parent data"
  getUsers(values) {

    console.warn(values)
  }

}
