import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './pages/single/single.component';
import { PostComponent } from './pages/post/post.component';
import { InfoComponent } from './pages/info/info.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "single",
    component: SingleComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "about",
    component: InfoComponent
  },
  {
    path: "terms",
    component: TermsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
