import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CoreComponent } from './core.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThemeService } from './services/theme.service';
import { StationService } from './services/station.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [ThemeService, StationService]
})
export class CoreModule { }
