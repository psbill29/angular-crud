import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from '../user'

@Component({
  selector: 'app-getuserbyid',
  templateUrl: './getuserbyid.component.html',
  styleUrls: ['./getuserbyid.component.css']
})
export class GetuserbyidComponent implements OnInit {

  user: User=new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.getUserById(this.user.id).subscribe((data: User) => {
      console.log(data);
      this.user = data;
      this.gotoUser();
    })
  }

  gotoUser() {
    this.router.navigate(['/userbyid'])
  }

}
