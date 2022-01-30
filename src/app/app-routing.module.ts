import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InternalGuard } from './internal.guard';
import { LoginComponent } from './login/login.component';
import { PalaceComponent } from './palace/palace.component';
import { RealSitioComponent } from './real-sitio/real-sitio.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'nosotros',
    component: AboutUsComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'real-sitio',
    component: RealSitioComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'palacio-carlos-iii',
    component: PalaceComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'alojamiento',
    component: AccommodationComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'confirmar-asistencia',
    component: ConfirmComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'contacto',
    component: ContactComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
