import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CarComponent } from './components/car/car.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'produto/:id',
    component: ProductComponent,
    data: { animation: 'ProductPage' },
  },
  { path: 'carrinho', component: CarComponent, data: { animation: 'CarPage' } },
];
