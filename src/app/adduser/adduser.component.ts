import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
    this.userService.addUser(this.user).subscribe((data: User) => {
      console.log(data);
      this.gotoUserList();
    });

  }

  gotoUserList() {
    this.router.navigate(['/user'])
  }
}
