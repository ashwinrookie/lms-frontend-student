import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PipeModule } from '../core/pipes/pipe.module';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
  declarations: [CartComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    HeaderComponent,
    PipeModule,
    FooterComponent,
  ],
})
export class CartModule {}
