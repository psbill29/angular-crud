import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-deleteuserbyname',
  templateUrl: './deleteuserbyname.component.html',
  styleUrls: ['./deleteuserbyname.component.css']
})
export class DeleteuserbynameComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.deleteUserByName(this.user.name).subscribe((data: User) => {
      console.warn('Deleted User :' + data);
      this.user = data;
      this.gotonextpage();
    })
  }

  gotonextpage() {
    this.router.navigate(['/deletebyname']);
  }
}
