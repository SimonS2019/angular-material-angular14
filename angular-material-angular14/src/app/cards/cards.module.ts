import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule, CardsRoutingModule, MatCardModule, MatButtonModule],
})
export class CardsModule {}
