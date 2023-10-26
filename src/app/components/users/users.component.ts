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
  user : User = new User();
  constructor(private _service : UserService) { }

  ngOnInit(): void {
      this._service.getUsers().subscribe(
        data => this.list_users = data
      )
  }


  add()
  {
    this._service.addUser(this.user).subscribe(
      data => {this.list_users.push(data);
        this.user = new User();
      }
    )
  }

  delete(id : number)
  {
    this._service.delete(id).subscribe(
      data => this.list_users = this.list_users.filter(item => item.id != id)
    )
  }
}
