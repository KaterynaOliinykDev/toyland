import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/admin/guards/auth.guard';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'about', component: ContactComponent},
  { path: 'contact', component: AboutComponent},
  { path: 'delivery', component: DeliveryComponent},
  { path: 'exchange', component: ExchangeComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
