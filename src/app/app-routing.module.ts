import { NgModule } from '@angular/core';
import { PreloadAllModules,Routes, RouterModule,ExtraOptions } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DiseaseComponent } from './disease/disease.component';
import { ViewComponent } from './view/view.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: '',
    loadChildren: () => import('./serach-delete/serach-delete.component').then(m => m.SerachDeleteComponent)
  },
  {
    path: 'register',
    loadChildren: () => import('./registration/registration.component').then(m => m.RegistrationComponent)
  },
    {
    path: 'login',
    loadChildren: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'prescription',
    loadChildren: () => import('./prescription/prescription.component').then(m => m.PrescriptionComponent)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.component').then(m => m.ViewComponent)
  },
  {
    path: 'disease',
    loadChildren: () => import('./disease/disease.component').then(m => m.DiseaseComponent)
  },
  {
    path: 'pricing',
    loadChildren: () => import('./pricing/pricing.component').then(m => m.PricingComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
