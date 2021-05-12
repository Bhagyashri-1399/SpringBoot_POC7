import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {User} from '../user';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  id : number;
 users1:any;
 
 firstName:string;

 searchText = '';
 filters = {
  keyword: ''
}


  constructor(
    private service:UserService,  private router: Router) { }

    ngOnInit() :void{
      let resp=this.service.getUsersList();
      resp.subscribe((data)=>this.users1=data); 
 
     
    }
     findUserById(){
      let resp= this.service.getUser(this.id);
      resp.subscribe((data)=>this.users1=data);
    }



deleteUser(id: number) {
  this.service.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.listUsers();
      },
      error => console.log(error));
} 

listUsers() {
  this.service.getUsersList().subscribe(
    data => this.users1 = this.filterUsers(data)
  )
}
selectedcol: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedcol = event.target.value;
    console.log(this.selectedcol);
  }

filterUsers(users2: User[]) {
  return users2.filter((e) => {
    if(this.selectedcol == "firstName"){
    return e.firstName.toLowerCase().includes(this.filters.keyword.toLowerCase());
  }
  if(this.selectedcol == "city"){
    return e.city.toLowerCase().includes(this.filters.keyword.toLowerCase());
  }
  if(this.selectedcol == "lastName"){
    return e.lastName.toLowerCase().includes(this.filters.keyword.toLowerCase());
  }
  if(this.selectedcol == "country"){
    return e.country.toLowerCase().includes(this.filters.keyword.toLowerCase());
  }
  if(this.selectedcol == "zipCode"){
    return e.zipCode.toLowerCase().includes(this.filters.keyword.toLowerCase());
  }
  if(this.selectedcol == "state"){
    return e.state.toLowerCase().includes(this.filters.keyword.toLowerCase());
  }
  if(this.selectedcol == "email"){
    return e.email.toLowerCase().includes(this.filters.keyword.toLowerCase());
  }
 })
}
 
userDetails(id: number){
  this.router.navigate(['details', id]);
}
search(value: string): void {
  this.users1 = this.users1.filter((val) => val.name.toLowerCase().includes(value));
}

updateUser(id: number){
  this.router.navigate(['update', id]);
}

     
     
    

}