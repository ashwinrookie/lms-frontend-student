import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, HeaderComponent],
})
export class CartModule {}
