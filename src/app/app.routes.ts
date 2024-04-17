import { Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {SubmoduleComponent} from "./submodule/submodule.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'sub',
    component: SubmoduleComponent,
    loadChildren: () => import('./submodule/submodule.module').then(m => m.SubmoduleModule)
  }
];
