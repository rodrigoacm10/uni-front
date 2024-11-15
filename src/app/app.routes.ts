import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CarComponent } from './components/car/car.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto/:id', component: ProductComponent },
  { path: 'carrinho', component: CarComponent },
];
