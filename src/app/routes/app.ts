
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NotFoundComponent } from '../components/NotFound';
// import { RegistrationComponent } from './../modules/auth/Registration/index';
import { CoursesComponent } from '../courses/courses.component';
import { CourseComponent } from '../course/course.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PricingComponent } from '../pricing/pricing.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'courses',
    pathMatch: 'full',
    component: CoursesComponent,
  },
  {
    path: 'pricing',
    pathMatch: 'full',
    component: PricingComponent,
  },
  {
    path: 'course/:id',
    component: CourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
