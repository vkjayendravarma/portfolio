import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/home/resume/resume.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "contactme",
    component: ContactComponent
  },
  {
    path: "footer",
    component: FooterComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
