import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  firstName : string;
  users1 : any;
  exs: User[] = [];

 

  constructor(
    private service:UserService) { }

    ngOnInit() :void{
      let resp=this.service.getUsersList();
      resp.subscribe((data)=>this.users1=data);  
      
     
    }
    findUserByFname(){
      let resp= this.service.getUserByFirstName(this.firstName)
      resp.subscribe((data)=>this.users1=data);
     }
     
   
}
