import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditGuard } from './admin-edit.guard';
import { AdminGuard } from './admin.guard';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientComponent } from './client/client.component';
import { SettingsCanLoadGuardGuard } from './settings-can-load-guard.guard';

const routes: Routes = [
  {
    path: 'Client',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: ClientComponent
      },
      {
        path: '',
        canActivate: [AdminEditGuard],
        children: [
          { path: 'edit', component: ClientEditComponent }
        ]
      }
    ]
  },
  {
    path: 'settings',
    canLoad: [SettingsCanLoadGuardGuard],
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
