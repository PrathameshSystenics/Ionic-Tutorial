import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ActionSheetComponent } from '../components/action-sheet/action-sheet.component';
import { AccordionComponent } from '../components/accordion/accordion.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    ActionSheetComponent, // adding our custom component
    AccordionComponent,
  ],
})
export class HomePageModule {}
