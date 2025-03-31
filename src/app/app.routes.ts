import { Routes } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';
import { EntityFieldsComponent } from './entity-fields/entity-fields.component';
import { EntityTreeComponent } from './entity-tree/entity-tree.component';
import { CreateReportComponent } from './create-report/create-report.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entities', pathMatch: 'full' },
  { path: 'entities', component: EntitiesComponent },
  { path: 'entity-fields', component: EntityFieldsComponent },
  { path: 'entity-tree', component: EntityTreeComponent },
  { path: 'create-report', component: CreateReportComponent }
]; 