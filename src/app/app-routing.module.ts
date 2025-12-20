import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'curriculo', component: ResumeComponent },
  { path: 'contato', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

