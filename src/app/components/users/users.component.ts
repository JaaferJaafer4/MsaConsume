import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list_users! : User[];
  constructor(private _service : UserService) { }

  ngOnInit(): void {
      this._service.getUsers().subscribe(
        data => this.list_users = data
      )
  }

}
