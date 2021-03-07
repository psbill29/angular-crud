import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    })

  }
}
