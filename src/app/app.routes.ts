import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: HomeComponent },
    ]
  }
];
