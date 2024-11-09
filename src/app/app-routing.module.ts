import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getStudentProfileResolver } from './core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./course/course.module').then((m) => m.CourseModule),
    resolve: [getStudentProfileResolver()],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
    resolve: [getStudentProfileResolver()],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
