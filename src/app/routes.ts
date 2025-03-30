import { Routes } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';
import { EntityFieldsComponent } from './entity-fields/entity-fields.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entities', pathMatch: 'full' },
  { path: 'entities', component: EntitiesComponent },
  { path: 'entity-fields', component: EntityFieldsComponent }
];