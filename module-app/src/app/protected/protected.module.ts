import { NgModule } from '@angular/core';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfilModule } from './profil/profil.module';
import { SettingsModule } from './settings/settings.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    DashboardModule,
    ProfilModule,
    SettingsModule
  ]
})
export class ProtectedModule { }
