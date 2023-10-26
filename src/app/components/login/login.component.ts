import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/models/authenticationrequest';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth : AuthenticationRequest = new AuthenticationRequest();
  constructor(private _service : UserService, private router : Router) { }
  err = false;
  ngOnInit(): void {
  }

  authenticate()
  {
    this._service.authenticate(this.auth).subscribe(
      data => {
        if(data == true)
        {
          this.router.navigateByUrl('/users');
          this.err =false;
        }
        else
        this.err = true;
      }
    )
  }
}
