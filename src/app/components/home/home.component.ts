import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  myLogo:string = 'assets/images/checklist.jpg';

  constructor(private authService: AuthenticationService, private router: Router){

  }
  ngOnInit(): void {

  }

  userName = 'User'; // replace with actual user name

  onClick() {
    // navigate to the next page or perform some action
    this.router.navigate(['todo']);
  }
}
