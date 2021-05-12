import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USER CRUD APP';
  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('value ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authenticationService.logout();
  }
  checkIsLoggedIn(){
    if(this.authenticationService.isUserLoggedIn()==false){
      alert("You are not Logged In!!");
      this.router.navigate(['login']);
    }
  }
}
