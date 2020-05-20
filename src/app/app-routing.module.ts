import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-logout', component: LoginLogoutComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
