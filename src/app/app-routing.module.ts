import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'logout', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'add', component: CreateUserComponent},
  {path: 'search', component: SearchComponent},
  {path: 'update/:id', component: UpdateUserComponent},
  {path: 'details/:id', component: UserDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
